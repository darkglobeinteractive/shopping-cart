import React from 'react';
import '../css/CartItems.css';
import CartItem from './CartItem';

const CartItems = () => {
  return (
    <div>
      <h2>CartItems</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default CartItems;
