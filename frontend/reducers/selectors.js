import { values } from 'lodash';

export const selectSubscriptions = subscriptions => (
  values(subscriptions)
);

export const selectSubscriptionIds = subscriptions => (
  selectSubscriptions(subscriptions).map(sub => (sub.id))
);
