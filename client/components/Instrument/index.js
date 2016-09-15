import React from 'react';
import { map } from 'lodash';

import { withMutations } from '../../util/mutations';

class Instrument extends React.Component {
  render() {
    const { instrument } = this.props;

    return (
      <div>
        <h4>{instrument.instrumentType} Instrument <small>{instrument.id}</small></h4>
        <div>
          {map(instrument.data, (v, k) => {
            return (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{JSON.stringify(v)}</dd>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    );
  }
}

export default Instrument;
