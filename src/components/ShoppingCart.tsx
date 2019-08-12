import React from 'react';

// Components
import Item from './ShoppingCartItem';
import { ProductData } from '../data';

interface ShoppingCartProps {
  cart: ProductData[];
}

const ShoppingCart = (props: ShoppingCartProps): React.ReactElement => {
  const getCartTotal = (): string => {
    return props.cart
      .reduce((acc, value): number => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {props.cart.map(
        (item): React.ReactElement => (
          <Item key={item.id} {...item} />
        )
      )}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
