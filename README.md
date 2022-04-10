# demo-federated-rickandmorty

Example of how to transform a non-federation schema SDL and run it against a federation gateway even though it doesn't support it under the hood.

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

## Installation

```
npm i
```

## Usage

Then start the servers and gateway with the current schemas and setup

```
npm start
```

The gateway should be running at http://localhost:4000/ where you can send queries to the [Rick and Morty API](https://rickandmortyapi.com/graphql)
but with an added field to `Character.nickname`.

## Context
This is a demo of the [@apollosolutions/add-federated-types](https://github.com/apollosolutions/add-federated-types) CLI.
For more details about that library see the README there. For this demo repo you can see how to regenerate the files for the
`rickandmorty` service in the [services/rickandmorty](services/rickandmorty) directory.