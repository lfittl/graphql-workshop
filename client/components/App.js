import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import HelloWorldWithData from './HelloWorldWithData';

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.client = new ApolloClient({
      networkInterface: createNetworkInterface('http://localhost:5000/graphql'),
      dataIdFromObject: r => r.id,
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <HelloWorldWithData />
      </ApolloProvider>
    );
  }
}

export default App;
