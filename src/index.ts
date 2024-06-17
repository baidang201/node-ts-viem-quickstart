import mempoolJS from '@mempool/mempool.js';
import { Tx } from '@mempool/mempool.js/lib/interfaces/bitcoin/transactions';

import { PrismaClient } from '@prisma/client';
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

ws.on('message', async function incoming(data) {
  const res = JSON.parse(data.toString());
  if (res.block) {
    console.log('@@@ res.block \n');
    console.log(res.block);

    const blockStatus = await blocks.getBlockStatus({ hash: res.block.id });
    console.log('@@@ status', blockStatus);

    const blockTxs = await blocks.getBlockTxs({ hash: res.block.id });
    console.log('@@@ blockTxs0', blockTxs);

    // todo get mapping(uint256 => Escrow) escrows; from eth

    for (var tx in blockTxs) {
      if (1 === tx.vin.length) {
        let vin = tx.vin[0];

        for (var item in tx.vout) {
          let origin = vin.prevout.scriptpubkey;
          let destination = item.scriptpubkey;
          let amount = item.value;

          // todo check "origin to destination with the specified amount" from eth data
          await prisma.transactions.create({
            data: {
              origin: origin,
              request_number: 1,
              quote_number: 2,
              amount: amount,
              destination: destination,
              expiry: 100,
              fulfilled: false,
            },
          });

          // const allUsers = await prisma.transactions.findMany({
          //   select: {
          //     origin: true,
          //     destination: true,
          //   },
          // });

          //console.dir(allUsers, { depth: null });

          // todo  update contract data
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
