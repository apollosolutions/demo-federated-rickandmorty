import { ApolloServer, gql } from "apollo-server";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { resolvers } from "./resolvers.js";
import fs from "fs";

const typeDefs = gql(fs.readFileSync("services/authors/schema.graphql", "utf8"));
const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);
const server = new ApolloServer({ schema });

server.listen(4001).then(({ url }) => {
  console.log(`🚀 Authors service ready at ${url}`);
});