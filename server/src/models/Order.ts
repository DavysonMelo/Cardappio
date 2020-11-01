import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const connection = mongoose.createConnection(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

autoIncrement.initialize(connection);

const OrderSchema = new mongoose.Schema({
  number: {
    type: Number,
  },

  dishId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Food',
  },

  tableNumber: [
    {
      type: Number,
      required: true,
    },
  ],

  observations: [
    {
      type: String,
    },
  ],

  status: {
    type: String,
  },
});

OrderSchema.plugin(autoIncrement.plugin, { model: 'Order', field: 'number' });

const Order = mongoose.model('Order', OrderSchema);

export default Order;
