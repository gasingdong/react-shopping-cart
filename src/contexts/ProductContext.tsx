import { createContext } from 'react';
import { ProductData } from '../data';

export const ProductContext = createContext({
  products: [] as ProductData[],
  addItem: (item: ProductData): void => {
    console.log(item);
  },
});
