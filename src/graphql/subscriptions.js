/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDefaultValues = /* GraphQL */ `
  subscription OnCreateDefaultValues {
    onCreateDefaultValues {
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
export const onUpdateDefaultValues = /* GraphQL */ `
  subscription OnUpdateDefaultValues {
    onUpdateDefaultValues {
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
export const onDeleteDefaultValues = /* GraphQL */ `
  subscription OnDeleteDefaultValues {
    onDeleteDefaultValues {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
