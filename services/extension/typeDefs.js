import { gql } from "apollo-server";

export const typeDefs = gql`
  # Extend some type from the non-federated graph
  extend type Character @key(fields: "id") {
    id: ID @external
    nickname: String
  }
`;