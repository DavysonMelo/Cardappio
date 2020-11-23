import { Request, Response } from 'express';
import Order from '../models/Order';
import Dish, { IdishDoc } from '../models/Dish';
import {
  parseStringAsArray,
  parseObsAsArray,
} from '../utils/parseStringAsArray';

class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      dishId,
      tableNumber,
      observations,
      additional,
      status,
    } = request.body;

    const dishIdArray = parseStringAsArray(dishId);
    const observationsArray = parseObsAsArray(observations);
    const additionalArray = parseStringAsArray(additional);

    let dishes = [] as IdishDoc[];

    let order;

    try {
      dishIdArray.map(async (dId) => {
        const dish = await Dish.findById(dId);
        if (dish) {
          dishes.push(dish as IdishDoc);
        } else {
          return response.status(400).json({ error: 'Dish not found' });
        }
      });

      order = await Order.create({
        dishId: dishIdArray,
        tableNumber,
        observations: observationsArray,
        additional: additionalArray,
        status,
      });

      request.io.emit('order', { order, dishes });

      return response.json({ order, dishes });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    let orders;
    try {
      orders = await Order.find();
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.json(orders);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    let order;

    try {
      order = Order.findById(id);

      if (!order) {
        response.status(400).json({ error: 'Dish not found!' });
      } else {
        order = await Order.findByIdAndDelete(id);
      }
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
    return response.status(200).json({ message: 'Order Delivered!' });
  }
}

export default OrderController;
