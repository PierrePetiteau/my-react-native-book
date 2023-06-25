// schema.js
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Books {
    books: [Book!]!
    canFetchMore: Boolean!
  }

  type Query {
    books: [Book!]!
    feed(offset: Int, limit: Int): Books!
  }

  input BookInput {
    title: String!
    author: String!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    addBooks(quantity: Int!): [Book!]!
    deleteBook(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
