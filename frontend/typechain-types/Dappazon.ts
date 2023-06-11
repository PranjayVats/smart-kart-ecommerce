/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Dappazon {
  export type ItemStruct = {
    id: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    category: PromiseOrValue<string>;
    image: PromiseOrValue<string>;
    cost: PromiseOrValue<BigNumberish>;
    rating: PromiseOrValue<BigNumberish>;
    stock: PromiseOrValue<BigNumberish>;
  };

  export type ItemStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    name: string;
    category: string;
    image: string;
    cost: BigNumber;
    rating: BigNumber;
    stock: BigNumber;
  };
}

export interface DappazonInterface extends utils.Interface {
  functions: {
    "buy(uint256)": FunctionFragment;
    "items(uint256)": FunctionFragment;
    "list(uint256,string,string,string,uint256,uint256,uint256)": FunctionFragment;
    "orderCount(address)": FunctionFragment;
    "orders(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buy"
      | "items"
      | "list"
      | "orderCount"
      | "orders"
      | "owner"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "items",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "list",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "orderCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "orders",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "items", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orderCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orders", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Buy(address,uint256,uint256)": EventFragment;
    "List(string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Buy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "List"): EventFragment;
}

export interface BuyEventObject {
  buyer: string;
  orderId: BigNumber;
  itemId: BigNumber;
}
export type BuyEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  BuyEventObject
>;

export type BuyEventFilter = TypedEventFilter<BuyEvent>;

export interface ListEventObject {
  name: string;
  cost: BigNumber;
  quantity: BigNumber;
}
export type ListEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  ListEventObject
>;

export type ListEventFilter = TypedEventFilter<ListEvent>;

export interface Dappazon extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DappazonInterface;

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
    buy(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        category: string;
        image: string;
        cost: BigNumber;
        rating: BigNumber;
        stock: BigNumber;
      }
    >;

    list(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _category: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _rating: PromiseOrValue<BigNumberish>,
      _stock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    orderCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    orders(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Dappazon.ItemStructOutput] & {
        time: BigNumber;
        item: Dappazon.ItemStructOutput;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  buy(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  items(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
      id: BigNumber;
      name: string;
      category: string;
      image: string;
      cost: BigNumber;
      rating: BigNumber;
      stock: BigNumber;
    }
  >;

  list(
    _id: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    _category: PromiseOrValue<string>,
    _image: PromiseOrValue<string>,
    _cost: PromiseOrValue<BigNumberish>,
    _rating: PromiseOrValue<BigNumberish>,
    _stock: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  orderCount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  orders(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, Dappazon.ItemStructOutput] & {
      time: BigNumber;
      item: Dappazon.ItemStructOutput;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buy(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber, BigNumber, BigNumber] & {
        id: BigNumber;
        name: string;
        category: string;
        image: string;
        cost: BigNumber;
        rating: BigNumber;
        stock: BigNumber;
      }
    >;

    list(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _category: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _rating: PromiseOrValue<BigNumberish>,
      _stock: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    orderCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, Dappazon.ItemStructOutput] & {
        time: BigNumber;
        item: Dappazon.ItemStructOutput;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Buy(address,uint256,uint256)"(
      buyer?: null,
      orderId?: null,
      itemId?: null
    ): BuyEventFilter;
    Buy(buyer?: null, orderId?: null, itemId?: null): BuyEventFilter;

    "List(string,uint256,uint256)"(
      name?: null,
      cost?: null,
      quantity?: null
    ): ListEventFilter;
    List(name?: null, cost?: null, quantity?: null): ListEventFilter;
  };

  estimateGas: {
    buy(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    list(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _category: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _rating: PromiseOrValue<BigNumberish>,
      _stock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    orderCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orders(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buy(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    items(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    list(
      _id: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      _category: PromiseOrValue<string>,
      _image: PromiseOrValue<string>,
      _cost: PromiseOrValue<BigNumberish>,
      _rating: PromiseOrValue<BigNumberish>,
      _stock: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    orderCount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orders(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
