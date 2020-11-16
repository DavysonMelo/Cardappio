import seeder from 'mongoose-seeder';

const userData = {
  _model: 'user',
  users: [
    {
      userName: 'admin',
      password: 'admin123',
      role: 'admin',
    },
    {
      userName: 'cozinha',
      password: 'cozinha123',
      role: 'kitchen',
    },
  ],
};

const dishData = {
  _model: 'dish',
  dishes: [
    {
      name: '',
      image: '',
      sideDishes: [''],
      calories: 0,
      price: 0.0,
      category: '',
    },
  ],
};

const orderData = {
  _model: 'order',
  orders: [
    {
      dishID: 0,
      tableNumber: 0,
      observations: 'string',
      status: 'string',
    },
    {
      number: 0,
      dishID: 0,
      tableNumber: 0,
      observations: 'string',
      status: 'string',
    },
  ],
};

seeder.seed(userData, () => {});
