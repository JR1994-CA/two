import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import React from "react";

const client = new ApolloClient({
    uri: 'https://localhost:4100/graphql',
    cache: new InMemoryCache()
});
export default client;