import mongoose from 'mongoose';
import schema from './schema';

const db = mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/@cardappio?retryWrites=true&w=majority`,
  {useNewUrlParser: true)
);
