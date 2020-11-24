import mongoose, { Document } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const connection = mongoose.createConnection(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

autoIncrement.initialize(connection);

const OrderSchema = new mongoose.Schema({
  number: {
    type: Number,
  },

  dishName: [
    {
      type: String,
      required: true,
      ref: 'Food',
    },
  ],

  tableNumber: {
    type: Number,
    required: true,
  },

  observations: [
    {
      type: String,
    },
  ],

  additional: [
    {
      type: String,
    },
  ],

  status: {
    type: String,
  },
});

interface IOrder {
  number?: number;
  dishName: string[];
  tableNumber: number;
  observations: string[];
  additional: string[];
  status: String;
}

export interface IOrderDoc extends IOrder, Document {}

OrderSchema.plugin(autoIncrement.plugin, { model: 'Order', field: 'number' });

const Order = mongoose.model<IOrderDoc>('Order', OrderSchema);

export default Order;
