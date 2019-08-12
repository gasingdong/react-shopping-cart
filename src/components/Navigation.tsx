import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductData } from '../data';

interface NavigationProps {
  cart: ProductData[];
}

const Navigation = (props: NavigationProps): React.ReactElement => {
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{props.cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
