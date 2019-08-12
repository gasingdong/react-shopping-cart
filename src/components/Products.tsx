import React, { useContext } from 'react';

// Components
import Product from './Product';

// Contexts
import ProductContext from '../contexts/ProductContext';

const Products = (): React.ReactElement => {
  const { products, addItem } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(
        (product): React.ReactElement => (
          <Product key={product.id} product={product} addItem={addItem} />
        )
      )}
    </div>
  );
};

export default Products;
