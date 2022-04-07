# Non-Federation Transformation Example

Example of how to transform a non-federation schema SDL and run it against a federation gateway even though it doesn't support it under the hood.

**The code in this repository is experimental and has been provided for reference purposes only. Community feedback is welcome but this project may not be supported in the same way that repositories in the official [Apollo GraphQL GitHub organization](https://github.com/apollographql) are. If you need help you can file an issue on this repository, [contact Apollo](https://www.apollographql.com/contact-sales) to talk to an expert, or create a ticket directly in Apollo Studio.**

## Installation

```
npm i

```

## Usage

First generate the new Authors schema

```
npm run transform-schema
```

Then start the servers

```
npm start
```