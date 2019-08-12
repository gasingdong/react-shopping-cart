import { createContext } from 'react';
import { ProductData } from '../data';

export default createContext({
  products: [] as ProductData[],
  addItem: (item: ProductData): void => {
    console.log(item);
  },
});
