import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  ingredients: [
    {
      type: String,
    },
  ],

  sideDishes: [
    {
      type: String,
    },
  ],

  calories: {
    type: Number,
  },

  price: {
    type: Number,
  },

  category: {
    type: String,
  },
});

const Dish = mongoose.model('Food', DishSchema);

export default Dish;
