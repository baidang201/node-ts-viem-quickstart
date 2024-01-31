import {
  createPublicClient,
  createWalletClient,
  formatEther,
  formatUnits,
  getContract,
  http,
  parseAbi,
  parseEther,
  parseUnits,
} from 'viem';
import { mainnet } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

async function main() {
  // 1. create public (read) and wallet (write) client with default rpc
  const read = createPublicClient({ chain: mainnet, transport: http(), batch: { multicall: true } });
  const write = createWalletClient({ chain: mainnet, transport: http() });

  // or with custom rpc
  // const rpc = 'https://rpc.ankr.com/eth';
  // const read = createPublicClient({ chain: mainnet, transport: http(rpc), batch: { multicall: true } });
  // const write = createWalletClient({ chain: mainnet, transport: http(rpc) });

  // 2.1 basic: read block, check rpc out of sync
  const block = await read.getBlock();
  const now = BigInt(Math.floor(Date.now() / 1000));
  if (now - block.timestamp > 30) throw Error('rpc out of sync');

  // 2.2 basic: read ether balance
  const address = '0x388C818CA8B9251b393131C08a736A67ccB19297';
  const balance = await read.getBalance({ address });
  console.log(`balance: ${formatEther(balance)}`);

  // 2.3 basic: send ether
  const account = privateKeyToAccount('0x...');
  const hash = await write.sendTransaction({ account, to: address, value: parseEther('1.1') });
  console.log(`send ether tx: ${hash}`);

  // 3.1 contract: abi
  const abi = parseAbi([
    'function name() public view returns (string memory)',
    'function symbol() view returns (string memory)',
    'function decimals() view returns (uint8)',
    'function balanceOf(address account) public view returns (uint256)',
    'function transfer(address to, uint256 value) public returns (bool)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
  ]);

  // 3.1 contract: get instance
  const contract = getContract({
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    abi,
    client: { public: read, wallet: write },
  });

  // 3.2 contract: single query
  const name = await contract.read.name();
  console.log(`token name: ${name}`);

  // 3.2 contract: batch queries
  const [symbol, decimals, tokenBalance] = await Promise.all([
    contract.read.symbol(),
    contract.read.decimals(),
    contract.read.balanceOf(['0xcEe284F754E854890e311e3280b767F80797180d']),
  ]);
  console.log(`${symbol} balance of ${address}: ${formatUnits(tokenBalance, decimals)}`);

  // 3.3 contract: write
  const to = '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97';
  const tx = await contract.write.transfer([to, parseUnits('1', decimals)], { account });
  console.log(`transfer erc20 tx: ${tx}`);

  // 3.4 contract: read event
  contract.watchEvent.Transfer({}, { onLogs: (logs) => console.log(logs) });

  await new Promise(function () {});
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
