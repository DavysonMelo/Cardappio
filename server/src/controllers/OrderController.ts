import { Request, Response } from 'express';
import Order from '../models/Order';

class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { dishId, tableNumber, observations, status } = request.body;

    let order;

    try {
      order = await Order.create({
        dishId,
        tableNumber,
        observations,
        status,
      });

      return response.json(order);
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
