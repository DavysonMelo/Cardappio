require('dotenv').config();

import mongoose from 'mongoose';
import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import http from 'http';
import socketio from 'socket.io';

const app = express();
const server = new http.Server(app);
const io = socketio(server);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

io.on('connection', (socket) => {
  console.log('conected');
});

app.use((request, response, next) => {
  request.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
