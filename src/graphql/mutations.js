/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDefaultValues = /* GraphQL */ `
  mutation CreateDefaultValues(
    $input: CreateDefaultValuesInput!
    $condition: ModelDefaultValuesConditionInput
  ) {
    createDefaultValues(input: $input, condition: $condition) {
      id
      Api_key1
      Api_key2
      Api_key3
      Api_key4
      App_version
      update_required
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDefaultValues = /* GraphQL */ `
  mutation UpdateDefaultValues(
    $input: UpdateDefaultValuesInput!
    $condition: ModelDefaultValuesConditionInput
  ) {
    updateDefaultValues(input: $input, condition: $condition) {
      id
      Api_key1
      Api_key2
      Api_key3
      Api_key4
      App_version
      update_required
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDefaultValues = /* GraphQL */ `
  mutation DeleteDefaultValues(
    $input: DeleteDefaultValuesInput!
    $condition: ModelDefaultValuesConditionInput
  ) {
    deleteDefaultValues(input: $input, condition: $condition) {
      id
      Api_key1
      Api_key2
      Api_key3
      Api_key4
      App_version
      update_required
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      stock
      amount
      quantity
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      stock
      amount
      quantity
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      stock
      amount
      quantity
      userID
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      vmoney
      availableToTrade
      trades
      watchlist
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      vmoney
      availableToTrade
      trades
      watchlist
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      vmoney
      availableToTrade
      trades
      watchlist
      Orders {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
