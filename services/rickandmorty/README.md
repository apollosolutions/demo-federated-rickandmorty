This is an example of adding federation support to an API that is non-federated and already deployed today.

The schema file in `real-schema.graphql` is fetched manually. Using the npm command, we generate a new `federated-rickandmorty.graphql`
which adds the required federation directives. This file is then given to Rover to do composition and generate
a new `supergraph.graphql` file.

1. Fetch the existing Rick and Morty schema (without Federation)
```shell
rover graph introspect https://rickandmortyapi.com/graphql > real-schema.graphql 
```

2. Specify your schema extensions

```graphql
# extensions.graphql

type Character @key(fields: "id")
```

3. Run `@apollosolutions/add-federated-types` to get a new schema

```shell
npx github:@apollosolutions/add-federated-types \
  --schema real-schema.graphql \
  --extensions extensions.graphql \
  --out federated-rickandmorty.graphql
```