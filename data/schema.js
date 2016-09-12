import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { getPostgresVersion } from './database';

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    version: {
      type: GraphQLString,
      resolve(obj, args, context, info) {
        return getPostgresVersion();
      },
    },
  }),
});

export var Schema = new GraphQLSchema({ query: queryType });
