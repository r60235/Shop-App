import React from 'react';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import Cart from './pages/Cart';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
      <div>
        <Nav />
        <div className='text-center py-5'><h1>Welcome to Shop App</h1></div>
        <Routes>
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
