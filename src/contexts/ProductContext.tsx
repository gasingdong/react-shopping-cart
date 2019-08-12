import { createContext } from 'react';
import { ProductData } from '../data';

const ProductContext = createContext({
  products: [] as ProductData[],
  addItem: (item: ProductData): void => {
    console.log(item);
  },
});

export default ProductContext;
