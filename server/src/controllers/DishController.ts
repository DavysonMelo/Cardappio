import { Request, Response } from 'express';
import Dish from '../models/Dish';

class DishController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      ingredients,
      sideDishes,
      calories,
      price,
      category,
    } = request.body;

    let dish;

    try {
      dish = await Dish.findOne({ name });

      const { filename } = request.file as Express.Multer.File;

      if (dish) {
        return response.status(400).json({ error: 'Dish already exists' });
      } else {
        dish = await Dish.create({
          name,
          image: filename,
          ingredients,
          sideDishes,
          calories,
          price,
          category,
        });
      }

      return response.status(200).json(dish);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    let dishes;
    try {
      dishes = await Dish.find();
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json(dishes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { category } = request.headers;
    let dishes;
    try {
      dishes = await Dish.find({
        category,
      });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json(dishes);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      image,
      ingredients,
      sideDishes,
      calories,
      price,
      category,
    } = request.body;

    let dish;
    let newDish;

    try {
      dish = await Dish.findById(id);

      if (!dish) {
        return response.status(400).json({ error: 'Dish not found!' });
      } else {
        newDish = await Dish.findByIdAndUpdate(
          id,
          {
            name,
            image,
            ingredients,
            sideDishes,
            calories,
            price,
            category,
          },
          { new: true }
        );
        dish = newDish;
        return response.status(200).json(dish);
      }
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    let dish;

    try {
      dish = Dish.findById(id);

      if (!dish) {
        response.status(400).json({ error: 'Dish not found!' });
      } else {
        dish = await Dish.findByIdAndDelete(id);
      }
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json({ message: 'Dish deleted!' });
  }
}

export default DishController;
