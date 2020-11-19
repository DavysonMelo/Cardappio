require('dotenv').config();

import Dish from '../../models/Dish';
import Order from '../../models/Order';
import User from '../../models/User';
import mongoose from 'mongoose';

const dataDish = [
  {
    name: 'Hamburger Do Chef',
    ingredients: ['2 Hamburgers 200g', 'Alface', 'Queijo cheddar', 'Pão Bola'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: ['Salada', 'Fritas', 'Tomate', 'Bacon'],
    calories: '550',
    price: 27.5,
    category: 'Hamburgers',
  },
  {
    name: 'Mini Hamburger',
    ingredients: ['1 Hamburger 100g', 'Alface', 'Queijo prato', 'pão bola'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: ['Salada', 'Fritas', 'Bacon', 'Tomate'],
    calories: '250',
    price: 16,
    category: 'Hamburgers',
  },
  {
    name: 'Coca-Cola 250ml',
    ingredients: ['Coca-cola em um copo de 250ml'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: [],
    calories: '160',
    price: 3.5,
    category: 'Bebidas',
  },
  {
    name: 'Coca-Cola 500ml',
    ingredients: ['Coca-cola em um copo de 500ml'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: [],
    calories: '340',
    price: 6.99,
    category: 'Bebidas',
  },
  {
    name: 'Coca-Cola 1l',
    ingredients: ['Coca-cola em garrafa de 1l'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: [],
    calories: '600',
    price: 10.99,
    category: 'Bebidas',
  },
  {
    name: 'Salada do Chef',
    ingredients: [
      'Repolho',
      'Cenoura',
      'Farofa de Bacon',
      'Maionese',
      '90g Mix de folhas',
    ],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: [
      'Tomate',
      'Alface',
      'Frango',
      'Croutons',
      'Molho Balsamico',
      'Palmito',
    ],
    calories: '50',
    price: 35.99,
    category: 'Saladas',
  },
  {
    name: 'Mini Salada',
    ingredients: ['25g Mix de Folhas'],
    image: 'http://loremflickr.com/500/500/food',
    sideDishes: ['Tomate', 'Alface', 'Frango', 'Croutons', 'Molho Balsamico'],
    calories: '25',
    price: 35.99,
    category: 'Saladas',
  },
];

const dataUser = [
  {
    userName: 'admin',
    password: 'admin123',
    role: 'administrator',
  },
  {
    userName: 'cozinha',
    password: 'cozinha123',
    role: 'kitchen',
  },
];

const dataOrder = [
  {
    dishId: '',
    tableNumber: [1],
    number: 1,
    observations: ['Sem Bacon'],
    status: 'Recebido',
  },
  {
    dishId: '',
    tableNumber: [1],
    number: 2,
    observations: ['Trocar queijo para cheddar e molho extra'],
    status: 'Recebido',
  },
  {
    dishId: '',
    tableNumber: [2],
    number: 3,
    observations: ['Com gelo'],
    status: 'Recebido',
  },
  {
    dishId: '',
    tableNumber: [3],
    number: 4,
    observations: ['Sem gelo'],
    status: 'Recebido',
  },
];

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cardappio.vbk5u.mongodb.net/cardappio?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .catch((err) => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log('connected to db in development environment');
  });

async function cleanDb() {
  await Dish.deleteMany({}, (err) => {});
  await User.deleteMany({}, (err) => {});
  await Order.deleteMany({}, (err) => {});
}
cleanDb()
  .then(async () => {
    dataDish.map(async (dish) => {
      console.log('creating: ', dish);
      await Dish.create(dish);
    });
    dataUser.map(async (user, index) => {
      console.log('creating: ', user);
      await User.create(user);
    });
  })
  .then(async () => {
    await Dish.find()
      .then(async (data) => {
        console.log(data);
        dataOrder[0].dishId = data[0]._id;
        dataOrder[1].dishId = data[0]._id;
        dataOrder[2].dishId = data[0]._id;
        dataOrder[3].dishId = data[0]._id;
      })
      .then(() => {
        dataOrder.map(async (order, index) => {
          console.log('creating: ', order);
          await Order.create(order);
          if (dataOrder.length - 1 === index) {
            console.log('DONE!');
            mongoose.disconnect();
          }
        });
      });
  });
