import Promise from 'bluebird';
import {loadOne, loadMany, loaderFirstPass, createOne, updateOne, deleteOne} from './database_helpers';

import Instrument from './models/Instrument';
import Sequencer from './models/Sequencer';
import Song from './models/Song';

var options = { promiseLib: Promise };

var pgp = require('pg-promise')(options);
var monitor = require('pg-monitor');

monitor.attach(options);

var dbconfig = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: 'workshop',
    user: 'workshop',
};

var db = pgp(dbconfig);

let sequencersLoader = loadMany(db, Sequencer);
let instrumentsLoader = loadMany(db, Instrument);

module.exports = {
  getSong: (id, info) => loadOne(db, Song, id, info),
  getSequencer: (id, info) => loadOne(db, Sequencer, id, info),
  getSequencersForSong: (obj, info) => sequencersLoader.load(loaderFirstPass(Sequencer, obj, info)),
  getInstrumentsForSequencer: (obj, info) => instrumentsLoader.load(loaderFirstPass(Instrument, obj, info)),
  createSequencer: (attrs, info) => createOne(db, Sequencer, attrs, info),
  deleteSequencer: (id) => deleteOne(db, Sequencer, id),
};
