import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import HelloWorld from './HelloWorld';

const simpleExample = gql`
  query simpleExample {
    version
  }
`

const HelloWorldWithData = graphql(simpleExample, {
  props: ({data: { loading, version }}) => ({
    loading,
    version,
  }),
})(HelloWorld);

export default HelloWorldWithData;
