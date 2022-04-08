This is an example of adding federation support to an API that is non-federated and already deployed today.

The schema file in `real-schema.graphql` is fetched manually. Using the npm command, we generate a new `federated-rickandmorty.graphql`
which adds the required federation directives. This file is then given to Rover to do composition and generate
a new `supergraph.graphql` file.

You can get a new `real-schema.graphql` file with Rover

```shell
rover graph introspect https://rickandmortyapi.com/graphql > real-schema.graphql 
```