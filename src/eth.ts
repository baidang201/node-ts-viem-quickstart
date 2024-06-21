import {
  Address,
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
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

import { rfqabi } from './abi';

import { defineChain } from 'viem';

export const ggxchain = defineChain({
  id: 888866,
  name: 'ggxchain',
  nativeCurrency: {
    decimals: 18,
    name: 'ggx',
    symbol: 'GGX',
  },
  rpcUrls: {
    default: {
      http: [process.env.GGX_HTTP_URL || 'https://brooklyn-archive.ggxchain.net/dev-brooklyn'],
      webSocket: [process.env.GGX_WS_URL || 'wss://brooklyn-archive.ggxchain.net/dev-brooklyn'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Explorer',
      url: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fbrooklyn-archive.ggxchain.net%2Fdev-brooklyn#/explorer',
    },
  },
});

const rpc = process.env.GGX_HTTP_URL || 'https://brooklyn-archive.ggxchain.net/dev-brooklyn ';
const read = createPublicClient({ chain: ggxchain, transport: http(rpc), batch: { multicall: true } });
const write = createWalletClient({ chain: ggxchain, transport: http(rpc) });

const contractAddress = process.env.CONTRACT_ADDRESS || '0x2f500e19aAe438d823F9bb3715B2D2c47d3E4618';
const privateKey = process.env.PRIVATE_KEY || '0xf5844012a922d56304f5020d8f8a5a8a8d8957347f20bc2ad87eefdccd0f0125';

export async function getEscrowCount() {
  const data = await read.readContract({
    address: contractAddress as Address,
    abi: rfqabi,
    functionName: 'getEscrowCount',
    args: [],
  });

  return data;
}

export async function getEscrow(index: bigint) {
  const data = await read.readContract({
    address: contractAddress as Address,
    abi: rfqabi,
    functionName: 'getEscrow',
    args: [index],
  });

  return data;
}

export async function getRequest(bitcoinAddress: `0x${string}`, requestNumber: bigint) {
  const data = await read.readContract({
    address: contractAddress as Address,
    abi: rfqabi,
    functionName: 'getRequest',
    args: [bitcoinAddress, requestNumber],
  });

  return data;
}

export async function fulfillRequest(escrowNumber: bigint) {
  const account = privateKeyToAccount(privateKey as `0x${string}`);

  const abi = parseAbi(['function fulfillRequest(uint256 _escrowNumber)']);

  const contract = getContract({
    address: contractAddress as Address,
    abi,
    client: { public: read, wallet: write },
  });

  const tx = await contract.write.fulfillRequest([escrowNumber], { account });
  console.log(`fulfillRequest tx: ${tx}`);
}
