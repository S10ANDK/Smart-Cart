import React from 'react';
import Div from '../defaultStyles/Div';
import { useCart } from '../hooks/useCart';

function Cart() {
  const { cart, products, clearCart } = useCart();
  console.log('test2', products);
  console.log(cart);

  return (
    <Div>
      <h1>Cart</h1>
      <button onClick={clearCart}>Clear cart</button>
      {cart.map((product) => (
        <div key={product.id}>
          {product.title} - {product.discountedPrice}
          <img src={product.imageUrl}></img>
        </div>
      ))}
    </Div>
  );
}

export default Cart;
