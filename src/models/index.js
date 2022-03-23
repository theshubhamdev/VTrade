// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "PENDING": "PENDING",
  "SUCCESS": "SUCCESS"
};

const { DefaultValues, Order, User } = initSchema(schema);

export {
  DefaultValues,
  Order,
  User,
  Status
};