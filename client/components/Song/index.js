import React from 'react';
import update from 'react-addons-update';
import { graphql, withApollo } from 'react-apollo';

import { QUERY_SONG } from '../../api/queries';
import { MUTATION_CREATE_SEQUENCER } from '../../api/mutations';
import { withMutations } from '../../util/mutations';
import { addSequencerToSong } from '../../reducers';
import Sequencer from '../Sequencer';

class Song extends React.Component {
  render() {
    if (this.props.loading) return <div>Loading...</div>;

    return (
      <div className="container-fluid">
        <div className="col-md-6">
          {this.props.song.sequencers.length == 0 && <h3>No sequencers yet</h3>}
          {this.props.song.sequencers.map(sequencer =>
            <Sequencer client={this.props.client} updateQuery={this.props.updateQuery} sequencer={sequencer} key={sequencer.id} />
          )}

          <button className="btn btn-success" onClick={this.handleCreateSequencer.bind(this)}>Create Sequencer</button>
        </div>
      </div>
    );
  }

  handleCreateSequencer(instrumentType) {
    this.props.createSequencer(this.props.song.id, 16, 4);
  }
}

const SongWithMutations = withMutations(Song, {
  createSequencer: {
    gql: MUTATION_CREATE_SEQUENCER,
    prop: (mutate, songId, resolution, bars) => mutate({
      variables: { songId, resolution, bars },
      updateQueries: {
        song: (prev, { mutationResult }) => {
          return addSequencerToSong(prev, mutationResult.data.createSequencer);
        },
      },
    }),
  },
});

const SongWithDataAndMutations = withApollo(graphql(QUERY_SONG, {
  options: ({ songId }) => ({ variables: { songId } }),
  props: ({ data: { loading, updateQuery, song } }) => ({
    loading,
    updateQuery,
    song,
  }),
})(SongWithMutations));

export default SongWithDataAndMutations;
