import update from 'react-addons-update';
import { findIndex, map, some, reject, cloneDeep } from 'lodash';

export function addSequencerToSong(prev, sequencer) {
  // This will be called twice when we're notified of our own mutations
  if (some(prev.song.sequencers, s => s.id == sequencer.id)) {
    return prev;
  }

  return update(prev, { song: { sequencers: { $unshift: [sequencer] } } });
}

export function deleteSequencerFromSong(prev, sequencer) {
  let next = cloneDeep(prev);

  next.song.sequencers = reject(next.song.sequencers, s => s.id == sequencer.id);

  return next;
}