import Promise from 'bluebird';

var pgp = require('pg-promise')({ promiseLib: Promise });

var dbconfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: 'workshop',
  user: 'workshop',
};

var db = pgp(dbconfig);

function getPostgresVersion() {
  return new Promise(function(resolve, reject) {
    db.any("SELECT pg_sleep(1), version() AS version")
    .then(function (data) {
      resolve(data[0]['version']);
    })
    .catch(function (error) {
      console.error(error);
      reject(error);
    });
  });
}

module.exports = {
  getPostgresVersion: getPostgresVersion,
};
