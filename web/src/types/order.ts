export default interface Order {
  _id: string;
  number: number;
<<<<<<< HEAD
  dishID: string;
  additional: string[];
=======
  dishName: string[];
>>>>>>> 90002cd27e04d0ee6fbce90607a3c1b35cbf4cfa
  tableNumber: number;
  observations: string[];
  additional?: string[];
  status: string;
}
