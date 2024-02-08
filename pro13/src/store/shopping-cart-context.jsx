import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, // for dropdown advice in IDE
});
