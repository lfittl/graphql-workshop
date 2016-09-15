import express from 'express';
import graphQLHTTP from 'express-graphql';
import {Schema} from '../data/schema';
import path from 'path';

const httpServer = require('http').createServer();
const app = express();
const SERVER_PORT = 5000;

app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.use('/graphql', graphQLHTTP({
  graphiql: true,
  pretty: true,
  schema: Schema,
}));

httpServer.on('request', app);
httpServer.listen(SERVER_PORT, () => {
  console.log(`Server is now running on http://localhost:${SERVER_PORT}`);
});
