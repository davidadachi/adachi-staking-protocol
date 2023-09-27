/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace IRouter {
  export type RouteStruct = {
    from: AddressLike;
    to: AddressLike;
    stable: boolean;
  };

  export type RouteStructOutput = [
    from: string,
    to: string,
    stable: boolean
  ] & { from: string; to: string; stable: boolean };
}

export interface IRouterInterface extends Interface {
  getFunction(nameOrSignature: "swapExactTokensForTokens"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      IRouter.RouteStruct[],
      AddressLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
}

export interface IRouter extends BaseContract {
  connect(runner?: ContractRunner | null): IRouter;
  waitForDeployment(): Promise<this>;

  interface: IRouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: IRouter.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      routes: IRouter.RouteStruct[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}