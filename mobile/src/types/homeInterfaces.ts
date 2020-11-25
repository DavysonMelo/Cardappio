export interface CategoryInterface {
  category: string;
  image_url: string;
  id: null;
}

export interface DishInterface {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  calories: number;
  category: string;
  image: string;
  image_url: string;
  sideDishes: string[];
}
export interface Order {
  qty: number;
  dishName: string;
  additional: string;
  observations: string;
  price: number;
}
