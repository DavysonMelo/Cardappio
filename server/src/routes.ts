import express from 'express';
import multer from 'multer';
import CategoryController from './controllers/CategoryController';
import DishController from './controllers/DishController';
import OrderController from './controllers/OrderController';
import SessionController from './controllers/SessionsController';
import UserController from './controllers/UserController';

import uploadConfig from './config/upload';

const routes = express.Router();
const upload = multer(uploadConfig);
const dishController = new DishController();
const orderController = new OrderController();
const userController = new UserController();
const sessionsController = new SessionController();
const categoryController = new CategoryController();

routes.post('/dishes', upload.single('image'), dishController.create);
routes.get('/dishes', dishController.index);
routes.get('/dish', dishController.findId);
routes.get('/dish-name', dishController.search);
routes.put('/dishes/:id', upload.single('image'), dishController.update);
routes.delete('/dishes/:id', dishController.delete);
routes.get('/dishes-category', dishController.show);

routes.post('/orders', orderController.create);
routes.get('/orders', orderController.index);
routes.delete('/orders/:id', orderController.delete);
routes.put('/orders/:id', orderController.update);

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.delete('/users/:id', userController.delete);

routes.post('/sessions', sessionsController.login);

routes.get('/categories', categoryController.index);

export default routes;
