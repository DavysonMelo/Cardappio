import { Request, Response } from 'express';
import User from '../models/User';
import hashPass from '../controllers/hashPass';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { userName, password, role } = request.body;

    let user = await User.findOne({ userName });

    try {
      const hashedPassword = await hashPass(password);
      if (user) {
        response.status(400).json({ error: 'User already exists!' });
      } else {
        user = await User.create({
          userName,
          password: hashedPassword,
          role,
        });
      }
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    user.password = undefined;
    return response.status(200).json(user);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    let users;
    try {
      users = await User.find();
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }

    return response.status(200).json(users);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = User.findById(id);
      if (!user) {
        return response.status(400).json({ error: 'User not found!' });
      } else {
        await User.findByIdAndDelete(id);
      }
      return response.status(200).json({ message: 'User deleted!' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default UserController;
