//Add -> optimism,xpla,celo,zora,orderly, 
//Add mod network
import {defineChain} from "viem";

export const xpla = /*#__PURE__*/ defineChain({
    id: 37,
    name: 'Xpla',
    nativeCurrency: {
      decimals: 18,
      name: 'XPLA',
      symbol: 'XPLA',
    },
    rpcUrls: {
      default: { http: ['https://37.rpc.thirdweb.com'] },
    },
    blockExplorers: {
      default: {
        name: 'Xplascan',
        url: 'https://aurorascan.dev',
        apiUrl: 'https://aurorascan.dev/api',
      },
    },
})

export const orderly = /*#__PURE__*/ defineChain({
    id: 291,
    name: 'orderly',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: { http: ['https://291.rpc.thirdweb.com'] },
    },
    blockExplorers: {
      default: {
        name: 'Aurorascan',
        url: 'https://explorer.orderly.network/',
      },
    },
})

export const celo = /*#__PURE__*/ defineChain({
  id: 42220,
  name: 'celo',
  rpcUrls: {
    default: { http: ['https://42220.rpc.thirdweb.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Aurorascan',
      url: 'https://explorer.orderly.network/',
    },
  },
})

export const zora = /*#__PURE__*/ defineChain({
  id: 7777777,
  name: 'Zora',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://7777777.rpc.thirdweb.com'] },
  },
  blockExplorers: {
    default: {
      name: 'Xplascan',
      url: 'https://aurorascan.dev',
      apiUrl: 'https://aurorascan.dev/api',
    },
  },
})

export const rari = /*#__PURE__*/ defineChain({
  id: 1380012617,
  name: 'Rari',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://1380012617.rpc.thirdweb.com'] },
  },
})

export const astar = /*#__PURE__*/ defineChain({
  id: 592,
  name: 'Astar',
  nativeCurrency: {
    decimals: 18,
    name: 'Astar',
    symbol: 'ASTR',
  },
  rpcUrls: {
    default: { http: ['https://592.rpc.thirdweb.com'] },
  },
})

export const moonbeam = /*#__PURE__*/ defineChain({
  id: 1284,
  name: 'Moonbeam',
  rpcUrls: {
    default: { http: ['https://endpoints.omniatech.io/v1/moonbeam/mainnet/public'] },
  },
})

export const optimism = /*#__PURE__*/ defineChain({
  id: 10,
  name: 'Optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://10.rpc.thirdweb.com'] },
  },
})


export const harmony = /*#__PURE__*/ defineChain({
  id: 1666600001,
  name: 'Harmony',
  rpcUrls: {
    default: { http: ['https://1666600001.rpc.thirdweb.com'] },
  },
})

export const moonriver = /*#__PURE__*/ defineChain({
  id: 1285,
  name: 'Moonriver',
  rpcUrls: {
    default: { http: ['https://1285.rpc.thirdweb.com'] },
  },
})

export const linea = /*#__PURE__*/ defineChain({
  id: 59144,
  name: 'Linea',
  rpcUrls: {
    default: { http: ['https://59144.rpc.thirdweb.com'] },
  },
})