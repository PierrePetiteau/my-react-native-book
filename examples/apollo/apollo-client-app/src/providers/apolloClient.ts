import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          feed: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = { books: [] }, incoming = { books: [] }) {
              return {
                books: [...existing.books, ...incoming.books],
                canFetchMore: incoming.canFetchMore,
              };
            },
          },
        },
      },
    },
  }),
});
