/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CampaignFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createCampaign(uint256)": FunctionFragment;
    "deployedCampaigns(uint256)": FunctionFragment;
    "getDeployedCampaigns()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createCampaign",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deployedCampaigns",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedCampaigns",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployedCampaigns",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedCampaigns",
    data: BytesLike
  ): Result;

  events: {};
}

export class CampaignFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CampaignFactoryInterface;

  functions: {
    createCampaign(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createCampaign(uint256)"(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployedCampaigns(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "deployedCampaigns(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<[string[]]>;

    "getDeployedCampaigns()"(overrides?: CallOverrides): Promise<[string[]]>;
  };

  createCampaign(
    minimum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createCampaign(uint256)"(
    minimum: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployedCampaigns(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "deployedCampaigns(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getDeployedCampaigns(overrides?: CallOverrides): Promise<string[]>;

  "getDeployedCampaigns()"(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    createCampaign(
      minimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "createCampaign(uint256)"(
      minimum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deployedCampaigns(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployedCampaigns(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<string[]>;

    "getDeployedCampaigns()"(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    createCampaign(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createCampaign(uint256)"(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployedCampaigns(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "deployedCampaigns(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<BigNumber>;

    "getDeployedCampaigns()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createCampaign(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createCampaign(uint256)"(
      minimum: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployedCampaigns(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "deployedCampaigns(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDeployedCampaigns(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDeployedCampaigns()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
