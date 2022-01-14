import React from 'react';
import '../css/App.css';
import CartHeader from './CartHeader';
import CartDetails from './CartDetails';
import CartItems from './CartItems';

const App = () => {
  return (
    <div id="page">
      <CartHeader />
      <CartDetails />
      <CartItems />
    </div>
  );
}

export default App;
