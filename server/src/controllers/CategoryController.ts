import { Request, Response } from 'express';
import Dish, { IdishDoc } from '../models/Dish';

class CategoryController {
  public async index(request: Request, response: Response): Promise<Response> {
    let categories: IdishDoc[] = [] as IdishDoc[];
    let uniqCategories: IdishDoc[] = [] as IdishDoc[];
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
          image_url: 0,
          id: 0,
        }
      );

      uniqCategories = Array.from(
        new Map(categories.map((e) => [e.category, e])).values()
      );
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    return response.status(200).json(uniqCategories);
  }
}

export default CategoryController;
