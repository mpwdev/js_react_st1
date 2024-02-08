import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, // for autocomplition in IDE
  updateItemQuantity: () => {}, // for autocomplition in IDE
});
