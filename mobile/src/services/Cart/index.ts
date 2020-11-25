import AsyncStorage from '@react-native-async-storage/async-storage';

export const cartPushData = async (value: any) => {
  try {
    const data = await AsyncStorage.getItem('cart');
    if (!data) {
      await AsyncStorage.setItem('cart', JSON.stringify([]));
    }
    const parsed = JSON.parse(data as string);
    await AsyncStorage.setItem('cart', JSON.stringify([...parsed, value]));
  } catch (error) {
    console.log(error);
  }
};

export const getCart = async () => {
  try {
    const data = await AsyncStorage.getItem('cart');
    if (!data) {
      await AsyncStorage.setItem('cart', JSON.stringify([]));
    }
    const parsed = JSON.parse(data as string);
    return parsed;
  } catch (error) {
    console.log(error);
  }
};
