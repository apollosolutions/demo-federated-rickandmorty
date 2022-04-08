# Gateway

The gateway takes in `supergraph.graphql` and runs the schema.
and using the Rover CLI.


To generate a new supergraph file, you use the Rover CLI

```sh
rover supergraph compose --config supergraph-config.yml > supergraph.graphql
```

This will output a new `supergraph.graphql` file