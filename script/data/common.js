import { FillerAbi } from "./../data/abi/abi.js";
import {endpointAbi} from "./../data/abi/lzEndpoint.js";
import {createPublicClient,createWalletClient,http} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import chalk from "chalk";
import { CHAIN } from "../main.js";
import * as dotenv from 'dotenv';

dotenv.config()

export function chainClient(chain) {
    return createPublicClient({ chain: chain, transport: http() });
}

export function walletClient(privateKey, chain) {
    return createWalletClient({
      chain: chain,
      account: privateKeyToAccount(privateKey),
      transport: http(),
    });
}

export function handlerPrivateKey(privateKey) {
    if (privateKey.startsWith("0x")) {
      return privateKey;
    } else {
      return `0x${privateKey}`;
    }
}

const PRIVATE_KEY = handlerPrivateKey(
    process.env.PRIVATE_KEY,
);


//**MAIN GAME */
export const setPeers = async(address, remoteId, remoteAddresses) => {
    const signer = walletClient(PRIVATE_KEY, CHAIN);
    try {
        const setPayloadPeers = signer.writeContract({
            address: address,
            abi: FillerAbi,
            functionName: "setPeers",
            args: [remoteId,remoteAddresses]
        })
        console.log(
            chalk.green(
                `Setup Peers Config in ${signer.chain.name} with ids ${remoteId} and ${remoteAddresses} in tx ${await setPayloadPeers}`,
            ),
        )
    } catch(e) {
        console.log(chalk.redBright("Error to setPeersConfiguration -> ", e));
    }
}

export const setUlnConfigs = async(address, lib, confirmation, eid, dvn) => {
    const siger = walletClient(PRIVATE_KEY, CHAIN);
    try {
        const setUlnConfig = siger.writeContract({
            address: address,
            abi: FillerAbi,
            functionName: "setUlnConfigs",
            args: [lib, confirmation, eid, dvn]
        })
        console.log(
            chalk.green(`Set ULN config for network ${eid} in chain ${await chalk.magentaBright(siger.chain.name)} with tx-hash ${await setUlnConfig}`)
        )
    } catch(e) {
        console.log(chalk.redBright("Error to UlnConfig -> ", e));
    }
}

//address _oapp,address _lib,tuple[] _params
export const setConfig = async(contract_address, oapp_address, receive_address, params_configuration) => {
    const signer = walletClient(PRIVATE_KEY, CHAIN);
    try {
        const setConfigPayload = await signer.writeContract({
            address:contract_address,
            abi: endpointAbi,
            functionName: "setConfig",
            args: [oapp_address, receive_address, params_configuration]
        })
        console.log(chalk.green(`Set config for network in chain ${await signer.chain.name} with tx-hash ${await setConfigPayload}`))
    } catch(e) {
        console.log(chalk.redBright("Error to setConfig -> ", e));
    }
}
