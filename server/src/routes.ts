import express from 'express';
import CategoryController from './controllers/CategoryController';
import DishController from './controllers/DishController';
import OrderController from './controllers/OrderController';
import SessionController from './controllers/SessionsController';
import UserController from './controllers/UserController';

const routes = express.Router();
const dishController = new DishController();
const orderController = new OrderController();
const userController = new UserController();
const sessionsController = new SessionController();
const categoryController = new CategoryController();

routes.post('/dishes', dishController.create);
routes.get('/dishes', dishController.index);
routes.put('/dishes/:id', dishController.update);
routes.delete('/dishes/:id', dishController.delete);
routes.get('/dishes-category', dishController.show);

routes.post('/orders', orderController.create);
routes.get('/orders', orderController.index);
routes.delete('/orders/:id', orderController.delete);

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', userController.delete);

routes.post('/sessions', sessionsController.login);

routes.get('/categories', categoryController.index);

export default routes;
