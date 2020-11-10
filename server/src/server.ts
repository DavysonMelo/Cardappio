require('dotenv').config();

import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
