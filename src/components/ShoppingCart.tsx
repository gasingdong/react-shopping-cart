import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import CartContext from '../contexts/CartContext';

const ShoppingCart = (): React.ReactElement => {
  const { cart } = useContext(CartContext);
  const getCartTotal = (): string => {
    return cart
      .reduce((acc, value): number => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map(
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
