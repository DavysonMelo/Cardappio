import { Request, Response } from 'express';
import Dish from '../models/Dish';

class CategoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    let categories;
    try {
      categories = await Dish.find(
        {},
        {
          _id: 0,
          name: 0,
          image: 0,
          ingredients: 0,
          sideDishes: 0,
          calories: 0,
          price: 0,
          __v: 0,
        }
      );
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json(categories);
  }
}

export default CategoryController;
