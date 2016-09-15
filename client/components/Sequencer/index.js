import React from 'react';
import { map } from 'lodash';

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

        <hr />
      </div>
    );
  }
}

export default Sequencer;
