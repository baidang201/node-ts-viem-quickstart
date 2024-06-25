import mempoolJS from '@mempool/mempool.js';
import { PrismaClient } from '@prisma/client';
import { getEscrowCount, getEscrow, fulfillRequest, getRequest } from './eth';
import * as base58 from 'bs58';

const prisma = new PrismaClient();

const {
  bitcoin: { blocks, websocket },
} = mempoolJS({
  hostname: 'mempool.space',
  network: 'testnet',
});

const ws = websocket.initServer({
  options: ['blocks'],
});

ws.on('message', async function incoming(data: any) {
  const res = JSON.parse(data.toString());
  if (res.block) {
    //console.log('@@@ res.block \n', res.block);

    const blockStatus = await blocks.getBlockStatus({ hash: res.block.id });
    console.log('@@@ status', blockStatus);

    const txCount = res.block.tx_count;
    const getBlockTxsStep = 25;

    for (let txIndex = 0; txIndex < txCount; txIndex += getBlockTxsStep) {
      const blockTxs = await blocks.getBlockTxs({ hash: res.block.id, start_index: txIndex });

      //console.log('@@@ blockTxs', blockTxs);
      //console.log('@@@ blockTxs JSON', JSON.stringify(blockTxs));

      for (const tx of blockTxs) {
        const vin = tx.vin[0];
        for (const item of tx.vout) {
          if (vin.prevout) {
            const origin = vin.prevout.scriptpubkey_address;
            const destination = item.scriptpubkey_address;
            const amount = item.value;

            const count = await getEscrowCount();
            //console.log('@@@ getEscrowCount ', count);

            for (let index = 0; index < count; index++) {
              const escrow = await getEscrow(BigInt(index));
              //console.log('@@@ escrow ', escrow);

              const request = await getRequest(escrow.originatorBitcoinAddress, escrow.requestNumber);
              //console.log('@@@ request ', request);

              // console.log(
              //   'res.block.timestamp < request.expiry',
              //   res.block.timestamp,
              //   request.expiry,
              //   res.block.timestamp < request.expiry,
              // );

              if (!escrow.fulfilled && !escrow.canceled && res.block.timestamp < request.expiry) {
                const encodeOriginatorBitcoinAddress = base58.encode(
                  Buffer.from(escrow.originatorBitcoinAddress.replace(/^(0x)/, ''), 'hex'),
                );
                const encodeDestinationBitcoinAddress = base58.encode(
                  Buffer.from(escrow.destinationBitcoinAddress.replace(/^(0x)/, ''), 'hex'),
                );

                // console.log(
                //   'encodeOriginatorBitcoinAddress === origin',
                //   encodeOriginatorBitcoinAddress,
                //   origin,
                //   encodeOriginatorBitcoinAddress === origin,
                // );
                // console.log(
                //   'encodeDestinationBitcoinAddress === destination ',
                //   encodeDestinationBitcoinAddress,
                //   destination,
                //   encodeDestinationBitcoinAddress === destination,
                // );
                // console.log(
                //   'request.amount === BigInt(amount)',
                //   request.amount,
                //   BigInt(amount),
                //   request.amount === BigInt(amount),
                // );

                if (
                  origin &&
                  destination &&
                  encodeOriginatorBitcoinAddress === origin &&
                  encodeDestinationBitcoinAddress === destination &&
                  request.amount === BigInt(amount)
                ) {
                  console.log('### in match');

                  const tx = {
                    origin: origin,
                    request_number: Number(escrow.requestNumber),
                    quote_number: Number(escrow.quoteNumber),
                    amount: Number(amount),
                    destination: destination,
                    expiry: Number(request.expiry),
                    fulfilled: true,
                  };

                  console.log('### tx is', tx);

                  const txInDb: object | null = await prisma.transactions.findUnique({
                    where: {
                      origin_request_number_quote_number: {
                        origin: tx.origin,
                        request_number: tx.request_number,
                        quote_number: tx.quote_number,
                      },
                    },
                  });

                  if (txInDb) {
                    console.log('### exist one', tx.origin, tx.request_number, tx.quote_number);
                    continue;
                  }

                  await fulfillRequest(BigInt(index));

                  await prisma.transactions.create({
                    data: tx,
                  });
                }
              }
            }
          }
        }
      }
    }
  }
});
