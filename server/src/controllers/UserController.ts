import { Request, Response } from 'express';

class UserController {
  public async show(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export default UserController;
