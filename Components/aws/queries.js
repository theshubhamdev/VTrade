/* eslint-disable */

export const getDefaultValues = /* GraphQL */ `
  query getDefaultValues($id: ID!) {
    getDefaultValues(id: $id) {
      Api_key1
      Api_key2
      Api_key3
      Api_key4
      App_version
      update_required
    }
  }
`;
