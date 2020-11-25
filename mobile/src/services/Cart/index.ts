import AsyncStorage from '@react-native-async-storage/async-storage';

class Cart {
  private static instance: Cart;

  constructor() {
    if (!Cart.instance) {
      this.begin();
      return (Cart.instance = new Cart());
    }
    Cart.instance = this;

    return this;
  }

  begin = async () => {
    await AsyncStorage.setItem('cart', JSON.stringify([]));
  };

  StoreData = async (value: any) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  GetCart = async () => {
    try {
      const data = await AsyncStorage.getItem('cart');
      const parsed = JSON.parse(data as string);

      return parsed;
    } catch (error) {
      console.log(error);
    }
  };
}

export default Cart;
