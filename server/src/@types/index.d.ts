import * as express from 'express';
import socketio from 'socket.io';

declare global {
  namespace Express {
    interface Request {
      io: socketio;
    }
  }
}
