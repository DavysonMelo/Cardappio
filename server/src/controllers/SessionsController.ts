import { Request, Response } from 'express';
import User, { IuserDoc } from '../models/User';
import bcrypt from 'bcrypt';

class SessionController {
  public async login(request: Request, response: Response): Promise<Response> {
    let user: IuserDoc | null;

    try {
      const { userName, password } = request.body;

      user = await User.findOne({ userName }).select('+password');

      if (!user) {
        return response.status(400).json('User not found!');
      }

      if (!(await bcrypt.compare(password, user.password as string))) {
        return response.status(400).json({ error: 'Invalid password!' });
      }

      user.password = '';
      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default SessionController;
