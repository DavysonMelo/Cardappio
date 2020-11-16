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
      name: 'Hambuger Do Chef',
      ingredients: [
        '2 Hamburgers 200g',
        'Alface',
        'Queijo cheddar',
        'Pão Bola',
      ],
      image: '',
      sideDishes: ['Salada', 'Fritas', 'Tomate', 'Bacon'],
      calories: 550,
      price: 27.5,
      category: 'Hamburgers',
    },
    {
      name: 'Mini Hambuger',
      ingredients: ['1 Hamburger 100g', 'Alface', 'Queijo prato', 'pão bola'],
      image: '',
      sideDishes: ['Salada', 'Fritas', 'Bacon', 'Tomate'],
      calories: 250,
      price: 16,
      category: 'Hamburgers',
    },
    {
      name: 'Coca-Cola 250ml',
      ingredients: ['Coca-cola em um copo de 250ml'],
      image: '',
      sideDishes: [],
      calories: 160,
      price: 3.5,
      category: 'Bebidas',
    },
    {
      name: 'Coca-Cola 500ml',
      ingredients: ['Coca-cola em um copo de 500ml'],
      image: '',
      sideDishes: [],
      calories: 340,
      price: 6.99,
      category: 'Bebidas',
    },
    {
      name: 'Coca-Cola 1l',
      ingredients: ['Coca-cola em garrafa de 1l'],
      image: '',
      sideDishes: [],
      calories: 600,
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
      image: '',
      sideDishes: [
        'Tomate',
        'Alface',
        'Frango',
        'Croutons',
        'Molho Balsamico',
        'Palmito',
      ],
      calories: 50,
      price: 35.99,
      category: 'Saladas',
    },
    {
      name: 'Mini Salada',
      ingredients: ['25g Mix de Folhas'],
      image: '',
      sideDishes: ['Tomate', 'Alface', 'Frango', 'Croutons', 'Molho Balsamico'],
      calories: 25,
      price: 35.99,
      category: 'Saladas',
    },
  ],
};

const orderData = {
  _model: 'order',
  orders: [
    {
      dishID: 1,
      tableNumber: 1,
      observations: 'Sem Bacon',
      status: '',
    },
    {
      dishID: 2,
      tableNumber: 1,
      observations: 'Trocar queijo para cheddar e molho extra',
      status: '',
    },
    {
      dishID: 5,
      tableNumber: 2,
      observations: '',
      status: '',
    },
    {
      dishID: 4,
      tableNumber: 3,
      observations: '',
      status: '',
    },
  ],
};
