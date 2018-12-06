import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql"
});

const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
          dogPhotoUrl
        }
      `}
    >
      {({ data }) =>
        <div>A greeting from the server: {data.hello}<br/>
        <h1>DOG</h1>
          <img src={data.dogPhotoUrl} />
        </div>}
    </Query>
  </ApolloProvider>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    );
  }
}

export default App;
