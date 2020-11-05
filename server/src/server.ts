require('dotenv').config();

import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
