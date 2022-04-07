import { transformSchemaFederation } from 'graphql-transform-federation';
import { printSchemaWithDirectives } from '@graphql-tools/utils';
import { buildSchema } from 'graphql';
import { readFileSync, writeFileSync } from 'fs';

const inputFileName = 'services/authors/pre-schema.graphql';
const outputFileName = 'services/authors/schema.graphql';
const schemaWithoutFederation = buildSchema(readFileSync(inputFileName, "utf8"));
  
const federationSchema = transformSchemaFederation(schemaWithoutFederation, {
    Query: {
        extend: true,
    },
    Author: {
        keyFields: ['id']
    },
});

writeFileSync(outputFileName, printSchemaWithDirectives(federationSchema));