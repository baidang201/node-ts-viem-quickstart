# 1 create .env
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"

GGX_WS_URL="wss://brooklyn-archive.ggxchain.net/dev-brooklyn"
GGX_HTTP_URL="https://brooklyn-archive.ggxchain.net/dev-brooklyn"

CONTRACT_ADDRESS = '0x2f500e19aAe438d823F9bb3715B2D2c47d3E4618'
PRIVATE_KEY = '0xf5844012a922d56304f5020d8f8a5a8a8d8957347f20bc2ad87eefdccd0f0125'
```

# 2 install packet
yarn install

# 3 update mempoollib patch
cp -rf ./mempoollibupdate/lib/* ./node_modules/@mempool/mempool.js/lib 


# 4 run postgres
docker compose up

# 5 create table by sql
```
-- public.transactions definition

-- Drop table

-- DROP TABLE public.transactions;

CREATE TABLE public.transactions (
	origin text NOT NULL,
	request_number int4 NOT NULL,
	quote_number int4 NOT NULL,
	amount int8 NOT NULL,
	destination text NOT NULL,
	expiry int4 NOT NULL,
	fulfilled bool DEFAULT false NOT NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (origin, request_number, quote_number)
);
```

# 6 get model from db
npx prisma db pull

# 7 generate client code
npx prisma generate

# 8 run backend
npx tsc && node dist/index.js

# 9 load contract in remix
```
Erc20 contract address      0xfB13f1A798a1aa6D8359fE4bEAAeF1FD04a8dCD4

Rfq contract address.       0x2f500e19aAe438d823F9bb3715B2D2c47d3E4618
```

testaccount 
```
// private key:  0x01ab6e801c06e59ca97a14fc0a1978b27fa366fc87450e0b65459dd3515b7391
// H160 address: 0xaaafB3972B05630fCceE866eC69CdADd9baC2771
```

# 10 Make request in rfq contract
```
0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d
2
1733976732
```


# 11 OfferQuote in rfq contract
```
0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d
1
0x0Df90890F4070A9b6A89D9eA39d90c304c85747c
2
1733976732
```

# 12 selectQuote in rfq contract
```
0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d
1
0
```

# 13 approve in erc20 contract
```
0x2f500e19aAe438d823F9bb3715B2D2c47d3E4618
4
```

# 14 lockQuote in rfq contract
0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d
1
0
0x6f60604bbf0231bfd2e96c97789dc60d86fde9886a55f5ea29

# 15 create raw transaction transfer btc from mvK3qsEaUSvHPhTLc4ax2vpsF132EF44UU/0x6f60604bbf0231bfd2e96c97789dc60d86fde9886a55f5ea29 to 0x6f60604bbf0231bfd2e96c97789dc60d86fde9886a55f5ea29/0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d
btc account info
```
####### accout1
| Public Address | mpJYXE1BuSCPbMUqEpjsSba8RuPnsPbKGC 
| Private Key | cNosFznGbQuKgCBKZNRXKMPu563CbN8ZC8ct4SmXURTeFLyaXBVY 

console.log(Buffer.from(base58.decode("mpJYXE1BuSCPbMUqEpjsSba8RuPnsPbKGC")).toString('hex')); //0x6f60604bbf0231bfd2e96c97789dc60d86fde9886a55f5ea29



####### accept2

| Public Address | mvK3qsEaUSvHPhTLc4ax2vpsF132EF44UU 
| Private Key | cUWMau8nbyKzXxYoDCGZaMCTCoAYMf7kzLHvpsmdX2N9Q1LSe3F7 

console.log(Buffer.from(base58.decode("mvK3qsEaUSvHPhTLc4ax2vpsF132EF44UU")).toString('hex')); //0x6fa24986e0d781f4a0871f1203ee7b7bf50ae3384e51e4035d

```

```
const bitcoin = require('bitcoinjs-lib');
const ECPairFactory = require('ecpair').default;
const ecc = require('tiny-secp256k1');
const fs = require('fs');
const base58 = require( "bs58");

const ECPair = ECPairFactory(ecc);
const network = bitcoin.networks.testnet; // testnet // Otherwise, bitcoin = mainnet and regnet = local


async function testRawTransaction() {
    let sum = 622745;
    let fee = 1000;
//  take the WIF-encoded private key (privateKeyWIF) and network information 
// and create a keyPair that we'll use for signing the transaction
const keyPair = ECPair.fromWIF("cUWMau8nbyKzXxYoDCGZaMCTCoAYMf7kzLHvpsmdX2N9Q1LSe3F7", network);

// create a transaction builder and pass the network. The bitcoin-js 
// Psbt class is used to do this. 
    const txb = new bitcoin.Psbt({ network });
    
// while these are default version and locktime values, you can set 
// custom values depending on your transaction
    txb.setVersion(2);
    txb.setLocktime(0);

// add inputs: previous transaction Id, output index of the funding transaction
// and, since this is a non segwit input, we must also pass the full previous 
// transaction hex as a buffer 
    txb.addInput({
        hash: "3f3721077013c4f097d43386611d1c22c67fdd0988c40044ce2defa04f997b85",
        index: 1,
        nonWitnessUtxo: Buffer.from("0200000001329d70274f53d632da34c015dcc3ecc326afb4c60b0d66a09b26e5963ab10f8f010000006a473044022017cee6d697d080f62ae345ed0ab1880d5b96606e8298e73e72aa752644988718022052d9f73b7a63ac4ea2eddc34f934f281ab1563ed55b68187e3e88d12afa5d36101210380e29c2ac09391daf51cd96aa759a9d7486ec231271c18b46ba7c5040b8988c3ffffffff0202000000000000001976a91460604bbf0231bfd2e96c97789dc60d86fde9886a88ac99800900000000001976a914a24986e0d781f4a0871f1203ee7b7bf50ae3384e88ac00000000", 'hex'), //curl -sSL "https://mempool.space/testnet/api/tx/3f3721077013c4f097d43386611d1c22c67fdd0988c40044ce2defa04f997b85/hex"
    });



// add outputs as the buffer of receiver's address and the value with amount
// of satoshis you're sending.
    txb.addOutput({
        address: "mpJYXE1BuSCPbMUqEpjsSba8RuPnsPbKGC",
        value: 2,
    }); // Sending 0.00000002 BTC

    txb.addOutput({
        address: "mvK3qsEaUSvHPhTLc4ax2vpsF132EF44UU",
        value: sum - fee,
    }); 

// sign with the generate keyPair and finalize the transansction 
    txb.signInput(0, keyPair);
    // txb.signInput(1, keyPair);

    txb.finalizeAllInputs();

//  extract the transaction and get the raw hex serialization
    const tx = txb.extractTransaction();

    console.log( tx.toHex());
    return tx.toHex();
}

testRawTransaction()

```

# 16 get raw transaction output
```
node index.js
0200000001329d70274f53d632da34c015dcc3ecc326afb4c60b0d66a09b26e5963ab10f8f010000006a473044022017cee6d697d080f62ae345ed0ab1880d5b96606e8298e73e72aa752644988718022052d9f73b7a63ac4ea2eddc34f934f281ab1563ed55b68187e3e88d12afa5d36101210380e29c2ac09391daf51cd96aa759a9d7486ec231271c18b46ba7c5040b8988c3ffffffff0202000000000000001976a91460604bbf0231bfd2e96c97789dc60d86fde9886a88ac99800900000000001976a914a24986e0d781f4a0871f1203ee7b7bf50ae3384e88ac00000000
```

# 17 send raw transaction in https://mempool.space/testnet/tx/push
![alt text](image.png)

# check transaction
https://mempool.space/testnet/tx/3f3721077013c4f097d43386611d1c22c67fdd0988c40044ce2defa04f997b85

![alt text](image-1.png)
# 18 check log
```
### tx is {
  origin: 'mvK3qsEaUSvHPhTLc4ax2vpsF132EF44UU',
  request_number: 1,
  quote_number: 0,
  amount: 2,
  destination: 'mpJYXE1BuSCPbMUqEpjsSba8RuPnsPbKGC',
  expiry: 1733976732,
  fulfilled: true
}
fulfillRequest tx: 0xe21e0ab93734f3f407b30686aa5046ded233ef14d5ad4d6b9b53fce51e4073b0
```

# 19 check database
![alt text](image-2.png)

# 20 check rfq contract
![alt text](image-3.png)