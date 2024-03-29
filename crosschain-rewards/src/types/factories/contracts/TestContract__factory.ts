/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  TestContract,
  TestContractInterface,
} from "../../contracts/TestContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "shares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b031916331790556101eb806100326000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806340c10f19146100465780638da5cb5b1461005b578063ce7c2ac21461008b575b600080fd5b610059610054366004610169565b6100b9565b005b60005461006e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100ab610099366004610193565b60026020526000908152604090205481565b604051908152602001610082565b6000546001600160a01b03163314610131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604482015260640160405180910390fd5b6001600160a01b03909116600090815260026020526040902055565b80356001600160a01b038116811461016457600080fd5b919050565b6000806040838503121561017c57600080fd5b6101858361014d565b946020939093013593505050565b6000602082840312156101a557600080fd5b6101ae8261014d565b939250505056fea2646970667358221220429c2e093e3b23f539e02130c089b9f7df480691ccb60abd07356bc8686f7da164736f6c63430008130033";

type TestContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestContract__factory extends ContractFactory {
  constructor(...args: TestContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      TestContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestContract__factory {
    return super.connect(runner) as TestContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestContractInterface {
    return new Interface(_abi) as TestContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestContract {
    return new Contract(address, _abi, runner) as unknown as TestContract;
  }
}
