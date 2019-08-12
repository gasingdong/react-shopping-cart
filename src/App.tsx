import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data, { ProductData } from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App(): React.ReactElement {
  const [products] = useState<ProductData[]>(data);
  const [cart, setCart] = useState<ProductData[]>([]);

  const addItem = (item: ProductData): void => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route
        exact
        path="/"
        render={(): React.ReactElement => (
          <Products products={products} addItem={addItem} />
        )}
      />

      <Route
        path="/cart"
        render={(): React.ReactElement => <ShoppingCart cart={cart} />}
      />
    </div>
  );
}

export default App;
