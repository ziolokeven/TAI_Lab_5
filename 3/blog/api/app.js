'use strict';

import express from 'express';
import routes from './REST/routes';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();


app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, (error) => {
  if (error) {
    console.error(error);
  }
  else {
    console.log('Connect with database established');
  }
});

process.on('SIGINT', () => {
  mongoose.connection.close(function () {
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});


routes(app);
app.listen(config.port, () => {
  console.info(`Server is running at ${config.port}`)
});
