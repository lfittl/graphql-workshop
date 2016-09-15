import React from 'react';
import update from 'react-addons-update';
import { graphql, withApollo } from 'react-apollo';

import { QUERY_SONG } from '../../api/queries';
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
        </div>
      </div>
    );
  }
}

const SongWithData = graphql(QUERY_SONG, {
  options: ({ songId }) => ({ variables: { songId } }),
  props: ({ data: { loading, updateQuery, song } }) => ({
    loading,
    updateQuery,
    song,
  }),
})(Song);

export default SongWithData;
