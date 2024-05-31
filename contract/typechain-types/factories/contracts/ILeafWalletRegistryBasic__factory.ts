/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILeafWalletRegistryBasic,
  ILeafWalletRegistryBasicInterface,
} from "../../contracts/ILeafWalletRegistryBasic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "assignee",
        type: "address",
      },
    ],
    name: "assignAddressToSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeviceOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRelatedDevices",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isSenderRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ILeafWalletRegistryBasic__factory {
  static readonly abi = _abi;
  static createInterface(): ILeafWalletRegistryBasicInterface {
    return new utils.Interface(_abi) as ILeafWalletRegistryBasicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILeafWalletRegistryBasic {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILeafWalletRegistryBasic;
  }
}