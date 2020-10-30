import mongoose from 'mongoose';

const DishSchema = new mongoose.Schema();

const Dish = mongoose.model('Food', DishSchema);

export default Dish;
