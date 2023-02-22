const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Comment {
    id: ID!
    text: String!
    user: User!
  }

  extend type Query {
    comments: [Comment!]!
  }

  extend type Mutation {
    createComment(text: String!): Comment!
  }
`;

module.exports = typeDefs;