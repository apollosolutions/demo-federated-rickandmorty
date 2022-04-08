import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { buildASTSchema } from 'graphql';
import { readFileSync, writeFileSync } from 'fs';
import { mergeTypeDefs } from '@graphql-tools/merge';

const inputFileName = 'services/rickandmorty/real-schema.graphql';
const inputFederationDefs = 'services/extension/federation-extensions.graphql';
const outputFileName = 'gateway/federated-rickandmorty.graphql';
const schemaWithoutFederation = readFileSync(inputFileName, 'utf8');
const federationDefs = readFileSync(inputFederationDefs, 'utf8');

const merged = buildASTSchema(mergeTypeDefs([schemaWithoutFederation, federationDefs]));

writeFileSync(outputFileName, printSchemaWithDirectives(merged));