import { values } from 'lodash';

export const selectSubscriptions = subscriptions => (
  values(subscriptions)
);

window.selectSubscriptions = selectSubscriptions;
