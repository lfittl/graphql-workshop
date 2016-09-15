import React from 'react';
import { map } from 'lodash';

import { MUTATION_DELETE_SEQUENCER } from '../../api/mutations';
import Instrument from '../Instrument';
import { deleteSequencerFromSong } from '../../reducers';
import { withMutations } from '../../util/mutations';

class Sequencer extends React.Component {
  render() {
    const { sequencer } = this.props;

    return (
      <div>
        <h3>Sequencer <small>{sequencer.id}</small></h3>
        <div>
          <dt>Bars:</dt>
          <dd>{sequencer.bars}</dd>
          <dt>Resolution:</dt>
          <dd>{sequencer.resolution}</dd>
        </div>

        <h4>Instruments:</h4>
        <div className="well">
          {map(sequencer.instruments, instrument => <Instrument instrument={instrument} key={instrument.id} />)}
        </div>

        <div className="btn-toolbar">
          <div className="btn-group">
            <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete Sequencer</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }

  handleDelete() {
    this.props.deleteSequencer(this.props.sequencer.id);
  }
}

const SequencerWithMutations = withMutations(Sequencer, {
  deleteSequencer: {
    gql: MUTATION_DELETE_SEQUENCER,
    prop: (mutate, sequencerId) => mutate({
      variables: { sequencerId },
      updateQueries: {
        song: (prev, { mutationResult }) => {
          return deleteSequencerFromSong(prev, mutationResult.data.deleteSequencer);
        },
      },
    }),
  },
});

export default SequencerWithMutations;
