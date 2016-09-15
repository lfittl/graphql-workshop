import Promise from 'bluebird';
import {loadOne, loadMany, loaderFirstPass} from './database_helpers';

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
  getSequencersForSong: (obj, info) => sequencersLoader.load(loaderFirstPass(Sequencer, obj, info)),
};
