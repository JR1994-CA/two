import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
    uri: 'https://localhost:4100/graphql',
    cache: new InMemoryCache()
});


export default client;