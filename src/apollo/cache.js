import { InMemoryCache, Reference, makeVar } from '@apollo/client';

export const cartActivitiesVar = makeVar([]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
       cartActivities: {
         read() {
           return cartActivitiesVar();
         }
       }
      }
    }
  }
});