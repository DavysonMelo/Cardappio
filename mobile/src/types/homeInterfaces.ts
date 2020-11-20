export interface CategoryInterface {
  category: string;
  image_url: string;
  id: null;
}

export interface DishInterface {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  calories: number;
  category: string;
  image_url: string;
  sideDishes: string;
}
