import React from 'react';
import { ProductData } from '../data';

interface ProductProps {
  product: ProductData;
  addItem: (item: ProductData) => void;
}

const Product = (props: ProductProps): React.ReactElement => {
  return (
    <div className="product">
      <img src={props.product.image} alt={`${props.product.title} book`} />

      <h1 className="title">{props.product.title}</h1>

      <p className="price">${props.product.price}</p>

      <button onClick={(): void => props.addItem(props.product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
