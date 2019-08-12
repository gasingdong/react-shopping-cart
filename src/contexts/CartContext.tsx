import { createContext } from 'react';
import { ProductData } from '../data';

export default createContext({
  cart: [] as ProductData[],
});
