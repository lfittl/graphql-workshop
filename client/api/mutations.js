import gql from 'graphql-tag';

export const MUTATION_CREATE_SEQUENCER = gql`
  mutation createSequencer($songId: String!, $resolution: Int!, $bars: Int!) {
    createSequencer(songId: $songId, resolution: $resolution, bars: $bars) {
      id
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

export const MUTATION_DELETE_SEQUENCER = gql`
  mutation deleteSequencer($sequencerId: String!) {
    deleteSequencer(sequencerId: $sequencerId) {
      id
    }
  }
`;
