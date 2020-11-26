export default interface Order {
  _id: string;
  number: number;
  dishName: string[];
  tableNumber: number;
  observations: string[];
  additional?: string[];
  status: string;
}
