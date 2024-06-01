/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { InitFacet, InitFacetInterface } from "../../contracts/InitFacet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610078577fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13208054336001600160a01b0319821681179092556001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0600080a36101ee908161007e8239f35b600080fdfe608080604052600436101561001357600080fd5b600090813560e01c63e1c7392a1461002a57600080fd5b346100ce57816003193601126100ce577fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b0316330361007757506100746100d2565b80f35b62461bcd60e51b815260206004820152602c60248201527f4f6e6c79206f776e657220697320616c6c6f77656420746f20706572666f726d60448201526b103a3434b99030b1ba34b7b760a11b6064820152608490fd5b5080fd5b7f202e1867cade063e32a2eb339a246f853a1a233314949ba8d9e2ac766f6ed84a60ff8154166101b5577fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f6020527ff97e938d8af42f52387bb74b8b526fda8f184cc2aa534340a8d75a88fbecc7758054600160ff1991821681179092557f65d510a5d8f7ef134ec444f7f34ee808c8eeb5177cdfd16be0c40fe1ab433695805482168317905563b400dc2f60e01b6000527f54176106f8def38a53cafa6fa9f47b09d8454741751f1c65c4dc48ed3663375a8054821683179055825416179055565b5056fea26469706673582212205b10781046624b192cb092859bed54d104dde19eba1f5d17aaa1b069ce38d5d064736f6c63430008120033";

type InitFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InitFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InitFacet__factory extends ContractFactory {
  constructor(...args: InitFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InitFacet> {
    return super.deploy(overrides || {}) as Promise<InitFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InitFacet {
    return super.attach(address) as InitFacet;
  }
  override connect(signer: Signer): InitFacet__factory {
    return super.connect(signer) as InitFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InitFacetInterface {
    return new utils.Interface(_abi) as InitFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InitFacet {
    return new Contract(address, _abi, signerOrProvider) as InitFacet;
  }
}
