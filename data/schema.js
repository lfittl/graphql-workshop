import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import GraphQLJSON from 'graphql-type-json';

import {
  getSong,
  getSequencersForSong,
} from './database';

var sequencerType = new GraphQLObjectType({
  name: 'Sequencer',
  description: 'A sequencer',
  fields: {
    id: { type: GraphQLString, description: 'ID of the sequencer' },
    songId: { type: GraphQLString, description: 'ID of the song the sequencer belongs to' },
    resolution: { type: GraphQLInt, description: 'The resolution of the sequencer' },
    bars: { type: GraphQLInt, description: 'The number of bars of the sequencer' },
    createdAt: { type: GraphQLInt, description: 'The unix timestamp of when the sequencer was created' },
    updatedAt: { type: GraphQLInt, description: 'The unix timestamp of when the sequencer was last updated' },
  },
});

var songType = new GraphQLObjectType({
  name: 'Song',
  description: 'A song',
  fields: {
    id: { type: GraphQLString, description: 'ID of the song' },
    tempo: { type: GraphQLInt, description: 'The tempo of the song' },
    createdAt: { type: GraphQLInt, description: 'The unix timestamp of when the song was created' },
    updatedAt: { type: GraphQLInt, description: 'The unix timestamp of when the song was last updated' },
    sequencers: {
      type: new GraphQLList(sequencerType),
      description: 'A song\'s sequencers',
      resolve(obj, args, context, info) {
        return getSequencersForSong(obj, info);
      },
    },
  },
});

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    song: {
      args: { songId: { type: GraphQLString } },
      type: songType,
      resolve(obj, args, context, info) {
        return getSong(args.songId, info);
      },
    },
  },
});

export var Schema = new GraphQLSchema({
  query: queryType,
});
