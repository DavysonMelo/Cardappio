import { Request, Response } from 'express';
import Order from '../models/Order';
import {
  parseStringAsArray,
  parseObsAsArray,
} from '../utils/parseStringAsArray';

class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      dishName,
      tableNumber,
      observations,
      additional,
      status,
    } = request.body;

    const dishNameArray = parseStringAsArray(dishName);
    const observationsArray = parseObsAsArray(observations);
    const additionalArray = parseStringAsArray(additional);

    let order;

    try {
      order = await Order.create({
        dishName: dishNameArray,
        tableNumber,
        observations: observationsArray,
        additional: additionalArray,
        status,
      });

      request.io.emit('order', order);

      return response.json(order);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { status } = request.headers;
    let orders;
    try {
      orders = await Order.find({ status });
      return response.json(orders);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
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
      return response.status(400).json({ error: error.message });
    }
    return response.status(200).json({ message: 'Order Delivered!' });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { status } = request.body;

    try {
      let order;

      order = await Order.findByIdAndUpdate(
        id,
        {
          status,
        },
        { new: true }
      );

      if (order?.status === 'pronto') {
        setTimeout(async () => {
          await Order.findByIdAndDelete(id);
        }, 10000);
      }

      return response.json(order);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default OrderController;
