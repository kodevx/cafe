import React from 'react';
import ProductContext from './contexts/ProductContext';
import OrderContext from './contexts/OrderContext';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
        <OrderContext>
        <ProductContext>
           <Home />
        </ProductContext> 
        </OrderContext>
    </div>
  );
}

export default App;

