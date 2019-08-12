import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data, { ProductData } from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import { ProductContext } from './contexts/ProductContext';

function App(): React.ReactElement {
  const [products] = useState<ProductData[]>(data);
  const [cart, setCart] = useState<ProductData[]>([]);

  const addItem = (item: ProductData): void => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/" component={Products} />

        <Route
          path="/cart"
          render={(): React.ReactElement => <ShoppingCart cart={cart} />}
        />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
