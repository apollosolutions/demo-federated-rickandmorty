import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';

const supergraphSdl = readFileSync('./gateway/supergraph.graphql', 'utf8');

const gateway = new ApolloGateway({
  supergraphSdl,
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Gateway API running at ${url}`);
});