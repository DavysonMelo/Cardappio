import { Request, Response } from 'express';

class SessionController {
  public async login(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;
      //authentication
      // returns user.
      return response.json({});
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async logout(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export default SessionController;
