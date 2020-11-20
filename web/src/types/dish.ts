export interface DishProps {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  calories: number;
  category: string;
  image_url: string;
  sideDishes: string;
}

export interface CategoryProp {
  id: string;
  imageUrl: string;
  category: string;
}
