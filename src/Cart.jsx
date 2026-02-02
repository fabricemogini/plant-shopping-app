import React from 'react';
import CartItem from './CartItem';

function Cart() {
  const handleContinueShopping = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return <CartItem onContinueShopping={handleContinueShopping} />;
}

export default Cart;
