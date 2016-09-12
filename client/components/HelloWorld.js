import React from 'react';

class HelloWorld extends React.Component {
  props: {
    version?: string,
    loading: boolean,
  };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.loading && <div>Loading...</div>}
        {!this.props.loading && <div>Running PostgreSQL {this.props.version}</div>}
      </div>
    );
  }
}

export default HelloWorld;
