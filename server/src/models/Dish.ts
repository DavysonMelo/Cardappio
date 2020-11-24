import mongoose, { Document } from 'mongoose';

const DishSchema = new mongoose.Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

interface Idish {
  name: string | undefined | string[];
  image: string;
  ingredients: [string];
  sideDishes: [string];
  calories: string;
  price: Number;
  category: string | undefined | string[];
}

export interface IdishDoc extends Document, Idish {}

DishSchema.virtual('image_url').get(function (this: Idish) {
  return `http://localhost:3333/uploads/${this.image}`;
});

const Dish = mongoose.model<IdishDoc>('Dish', DishSchema);

export default Dish;
