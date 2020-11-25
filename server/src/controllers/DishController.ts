import { Request, Response } from 'express';
import Dish from '../models/Dish';
import parseStringAsArray from '../utils/parseStringAsArray';

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

    const ingredientsArray = parseStringAsArray(ingredients);
    const sideDishesArray = parseStringAsArray(sideDishes);

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
          ingredients: ingredientsArray,
          sideDishes: sideDishesArray,
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
        if (request.file === undefined) {
          newDish = await Dish.findByIdAndUpdate(
            id,
            {
              name,
              ingredients,
              sideDishes,
              calories,
              price,
              category,
            },
            { new: true }
          );
        } else {
          const { filename } = request.file as Express.Multer.File;
          newDish = await Dish.findByIdAndUpdate(
            id,
            {
              name,
              image: filename,
              ingredients,
              sideDishes,
              calories,
              price,
              category,
            },
            { new: true }
          );
        }
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

  public async findId(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;
    let dishes;
    try {
      dishes = await Dish.findById(id);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json(dishes);
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { name } = request.headers;
    const nameReg = new RegExp(name as string, 'i');
    let dishes;
    try {
      dishes = await Dish.find({
        name: nameReg,
      });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json(dishes);
  }
}

export default DishController;
