import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Status {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS"
}



type DefaultValuesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class DefaultValues {
  readonly id: string;
  readonly Api_key1?: string;
  readonly Api_key2?: string;
  readonly Api_key3?: string;
  readonly Api_key4?: string;
  readonly App_version?: string;
  readonly update_required?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DefaultValues, DefaultValuesMetaData>);
  static copyOf(source: DefaultValues, mutator: (draft: MutableModel<DefaultValues, DefaultValuesMetaData>) => MutableModel<DefaultValues, DefaultValuesMetaData> | void): DefaultValues;
}

export declare class Order {
  readonly id: string;
  readonly stock: string;
  readonly amount: number;
  readonly quantity: number;
  readonly userID: string;
  readonly status?: Status | keyof typeof Status;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly email?: string;
  readonly vmoney: number;
  readonly availableToTrade: number;
  readonly trades?: (string | null)[];
  readonly watchlist?: (string | null)[];
  readonly Orders?: (Order | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}