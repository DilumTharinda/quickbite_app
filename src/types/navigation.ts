import { MenuItem } from '../data';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  ItemDetail: { item: MenuItem };
  Cart: undefined;
  Checkout: undefined;
  OrderTracking: { orderId: string };
  Profile: undefined;
};
