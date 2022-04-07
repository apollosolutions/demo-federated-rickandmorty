import { gql } from "apollo-server";

export const typeDefs = gql`
  type Post {
    id: ID!
    content: String!
    publishedAt: String!
    title: String!
  }

  # Extend some type from the non-federated graph
  extend type Author @key(fields: "id") {
    id: ID! @external
    posts: [Post]
  }
`;