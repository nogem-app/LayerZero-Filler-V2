import { helperChain } from "./data/information.js";
import { setUlnConfigs, setPeers, setConfig } from "./data/common.js";
import {
  orderly,
  celo,
  zora,
  xpla,
  rari,
  astar,
  moonbeam,
  moonriver,
  optimism,
  harmony
} from "./data/custom_chain.js";
import {
  arbitrum,
  arbitrumNova,
  aurora,
  base,
  beam,
  bsc,
  coreDao,
  mantle,
  confluxESpace,
  fantom,
  fuse,
  gnosis,
  kava,
  klaytn,
  linea,
  polygon,
  manta,
  metis,
  tenet,
  avalanche,
  telos,
  okc,
  scroll,
  opBNB,
  arbitrumGoerli,
  polygonZkEvm,
} from "viem/chains";
import ethers from "ethers";

function ulnlogic(chainName) {
  const chainData = helperChain[chainName];
  if (!chainData) {
    throw new Error(`Chain with name ${chainName} not found.`);
  }

  const lib = chainData.lib;
  const dvn = chainData.dvn;
  const receive = chainData.receive;
  const confirmations = BigInt(chainData.confirmation);
  const address = chainData.contract_address;
  const endpoint = chainData.endpoint;

  const eids = Object.entries(helperChain)
    .filter(([key]) => key !== chainName)
    .map(([, value]) => value.eid)
    .map((eid) => parseInt(eid));
  return { lib, dvn, confirmations, eids, address, receive, endpoint };
}

async function setUlnConfigsCaller(chainName) {
  try {
    const { address, lib, dvn, confirmations, eids } = ulnlogic(chainName);
    await setUlnConfigs(address, lib, confirmations, eids, dvn);
    console.log("setUlnConfigs has been called successfully.");
  } catch (error) {
    console.error("Error calling setUlnConfigs:", error);
  }
}

function addressToBytes32(address) {
  const hexAddress = address.replace(/^0x/, "").padStart(64, "0");
  return "0x" + hexAddress;
}

function peerLogic(chainName) {
  const chainData = helperChain[chainName];
  if (!chainData) {
    throw new Error(`Chain with name ${chainName} not found.`);
  }
  const address = chainData.contract_address;

  const remoteEids = Object.entries(helperChain)
    .filter(([key]) => key !== chainName)
    .map(([, value]) => parseInt(value.eid));

  const remoteAddresses = Object.entries(helperChain)
    .filter(([key]) => key !== chainName)
    .map(([, value]) => addressToBytes32(value.contract_address));

  return { address, remoteEids, remoteAddresses };
}

async function setPeersCaller(chainName) {
  try {
    const { address, remoteEids, remoteAddresses } = peerLogic(chainName);
    console.log(address, remoteEids, remoteAddresses);
    await setPeers(address, remoteEids, remoteAddresses);
    console.log("setPeers has been called successfully.");
  } catch (error) {
    console.error("Error calling setPeers:", error);
  }
}

async function getBytesSetConfig(
  eid,
  confirmations,
  optionalDVNCount,
  requiredDVNCount,
  optionalDVNThreshold,
  requiredDVNs,
  optionalDVNs,
) {
  const configTypeUln = 2;
  const ulnConfigStructType =
    "tuple(uint64 confirmations, uint8 requiredDVNCount, uint8 optionalDVNCount, uint8 optionalDVNThreshold, address[] requiredDVNs, address[] optionalDVNs)";

  const ulnConfigData = {
    confirmations,
    requiredDVNCount,
    optionalDVNCount,
    optionalDVNThreshold,
    requiredDVNs,
    optionalDVNs,
  };

  const ulnConfigEncoded = ethers.utils.defaultAbiCoder.encode(
    [ulnConfigStructType],
    [ulnConfigData],
  );

  const setConfigParamUln = {
    eid: eid,
    configType: configTypeUln,
    config: ulnConfigEncoded,
  };
  return setConfigParamUln;
}

async function setConfiglogic(chainName) {
  const chainData = helperChain[chainName];
  if (!chainData) {
    throw new Error(`Chain with name ${chainName} not found.`);
  }
  const dvn = chainData.dvn;
  const address = chainData.contract_address;
  const endpoint = chainData.endpoint;
  const receive = chainData.receive;
  const mass = [];

  const entries = Object.entries(helperChain);
  for (const [key, value] of entries) {
    if (key !== chainName) {
      const eid = parseInt(value.eid);
      const confirmations = BigInt(value.confirmation);
      const params = await getBytesSetConfig(
        eid,
        confirmations,
        0,
        1,
        0,
        [dvn],
        [],
      );
      mass.push(params);
    }
  }
  await setConfig(endpoint, address, receive, mass);
}

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function runConfigurationsForAllChains(chain) {
  await setUlnConfigsCaller(chain);
  await delay(10);
  await setPeersCaller(chain);
  await delay(20);
  await setConfiglogic(chain);
  console.log(`Completed configuration for ${chain}`);
}

export const CHAIN = polygonZkEvm;
runConfigurationsForAllChains("zkevm").then(() =>
  console.log("All configurations completed."),
);

//0x250c34D06857b9C0A036d44F86d2c1Abe514B3Da

//moonbeam
//harmony
//zkevm