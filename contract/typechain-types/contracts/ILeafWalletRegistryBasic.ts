/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ILeafWalletRegistryBasicInterface extends utils.Interface {
  functions: {
    "assignAddressToSender(address)": FunctionFragment;
    "getDeviceOwner()": FunctionFragment;
    "getRelatedDevices()": FunctionFragment;
    "isSenderRegistered()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assignAddressToSender"
      | "getDeviceOwner"
      | "getRelatedDevices"
      | "isSenderRegistered"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assignAddressToSender",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeviceOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRelatedDevices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSenderRegistered",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "assignAddressToSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeviceOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRelatedDevices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSenderRegistered",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ILeafWalletRegistryBasic extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILeafWalletRegistryBasicInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    assignAddressToSender(
      assignee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeviceOwner(overrides?: CallOverrides): Promise<[string]>;

    getRelatedDevices(overrides?: CallOverrides): Promise<[string[]]>;

    isSenderRegistered(overrides?: CallOverrides): Promise<[boolean]>;
  };

  assignAddressToSender(
    assignee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeviceOwner(overrides?: CallOverrides): Promise<string>;

  getRelatedDevices(overrides?: CallOverrides): Promise<string[]>;

  isSenderRegistered(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    assignAddressToSender(
      assignee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDeviceOwner(overrides?: CallOverrides): Promise<string>;

    getRelatedDevices(overrides?: CallOverrides): Promise<string[]>;

    isSenderRegistered(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    assignAddressToSender(
      assignee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeviceOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getRelatedDevices(overrides?: CallOverrides): Promise<BigNumber>;

    isSenderRegistered(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    assignAddressToSender(
      assignee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeviceOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRelatedDevices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isSenderRegistered(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
