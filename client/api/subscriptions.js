import gql from 'graphql-tag';

export const SUBSCRIPTION_SEQUENCER_ADDED = gql`
  subscription onSequencerAdded($songId: String!) {
    sequencerAdded(songId: $songId){
      id
      songId
      resolution
      bars
      instruments {
        id
        instrumentType
        data
      }
    }
  }
`;
