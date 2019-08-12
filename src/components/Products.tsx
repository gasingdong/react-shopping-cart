import React from 'react';

// Components
import Product from './Product';
import { ProductData } from '../data';

interface ProductsProps {
  products: ProductData[];
  addItem: (item: ProductData) => void;
}

const Products = (props: ProductsProps): React.ReactElement => {
  return (
    <div className="products-container">
      {props.products.map(
        (product): React.ReactElement => (
          <Product key={product.id} product={product} addItem={props.addItem} />
        )
      )}
    </div>
  );
};

export default Products;
