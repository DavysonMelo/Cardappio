import mongoose, { Document } from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  role: {
    type: String,
  },
});

interface Iuser {
  userName: string;
  password: string;
  role: string;
}

export interface IuserDoc extends Document, Iuser {}

const User = mongoose.model<IuserDoc>('User', UserSchema);

export default User;
