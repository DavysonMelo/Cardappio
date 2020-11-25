export default interface Order {
  id: string;
  number: number;
  dishID: string;
  additional: string[];
  tableNumber: number;
  observations: string;
  status: string;
}
