import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import Song from './Song';

class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.client = new ApolloClient({
      networkInterface: createNetworkInterface('/graphql'),
      dataIdFromObject: r => r.id,
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <Song songId="00c60941-3c2f-4935-b2f3-589b4594d302" />
      </ApolloProvider>
    );
  }
}

export default App;
