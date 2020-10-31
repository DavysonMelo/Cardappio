require('dotenv').config();

import mongoose from 'mongoose';
import express from 'express';

const app = express();

const db = mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.listen(3333);

app.get('/', (req, res) => {
  return res.json({ message: 'teste' });
});
