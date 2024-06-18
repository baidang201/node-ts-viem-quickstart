import mempoolJS from '@mempool/mempool.js';
import { Tx } from '@mempool/mempool.js/lib/interfaces/bitcoin/transactions';

import { PrismaClient } from '@prisma/client';

import { getEscrowCount, getEscrow, fulfillRequest, getRequest } from './eth';
const prisma = new PrismaClient();

const {
  bitcoin: { blocks, websocket },
} = mempoolJS({
  hostname: 'mempool.space',
  network: 'testnet',
});

const ws = websocket.wsInit();

ws.on('message', async function incoming(data: any) {
  const res = JSON.parse(data.toString());
  if (res.block) {
    console.log('@@@ res.block \n', res.block);
    console.log(res.block);

    const blockStatus = await blocks.getBlockStatus({ hash: res.block.id });
    console.log('@@@ status', blockStatus);

    const blockTxs = await blocks.getBlockTxs({ hash: res.block.id });
    console.log('@@@ blockTxs', blockTxs);
    console.log('@@@ blockTxs JSON', JSON.stringify(blockTxs));

    for (const tx of blockTxs) {
      if (1 === tx.vin.length) {
        const vin = tx.vin[0];
        for (const item of tx.vout) {
          const origin = vin.prevout.scriptpubkey;
          const destination = item.scriptpubkey;
          const amount = item.value;

          const count = await getEscrowCount();
          for (let index = 0; index < count; index++) {
            const escrow = await getEscrow(BigInt(index));

            const request = await getRequest(escrow.originatorBitcoinAddress, escrow.requestNumber);

            if (
              escrow.originatorBitcoinAddress === origin &&
              escrow.destinationBitcoinAddress === destination &&
              request.amount === BigInt(amount)
              //todo blocktimestamp less than request expiry
            ) {
              await fulfillRequest(BigInt(index));

              await prisma.transactions.create({
                data: {
                  origin: escrow.originatorBitcoinAddress,
                  request_number: Number(escrow.requestNumber),
                  quote_number: Number(escrow.quoteNumber),
                  amount: Number(amount),
                  destination: escrow.destinationBitcoinAddress,
                  expiry: Number(request.expiry),
                  fulfilled: true,
                },
              });
            }
          }
        }
      }
    }
  }
  // if (res.mempoolInfo) {
  //   console.log('@@@ res.mempoolInfo \n');
  //   console.log(res.mempoolInfo);
  // }
  // if (res.transactions) {
  //   console.log('@@@ res.transactions \n');
  //   console.log(res.transactions);
  // }
  // if (res['mempool-blocks']) {
  //   console.log('@@@ res.mempool-blocks \n');
  //   console.log(res['mempool-blocks']);
  // }
});

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
