import React from 'react';
import Div from '../defaultStyles/Div';
import { useCart } from '../hooks/useCart';

function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();

  const countQuantities = (cart) => {
    const cartWithQuantities = [];
    cart.forEach((item) => {
      const existingItem = cartWithQuantities.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartWithQuantities.push({ ...item, quantity: 1 });
      }
    });

    return cartWithQuantities;
  };

  const handleCheckout = () => {
    console.log('Cart contents:', cart);
    clearCart();
  };

  const cartItemsWithQuantity = countQuantities(cart);

  return (
    <Div>
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear cart</button>}
      {cartItemsWithQuantity.length === 0 ? (
        <div>No products in the cart.</div>
      ) : (
        cartItemsWithQuantity.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.imageUrl}></img>
            <p>Price: {item.discountedPrice} NOK</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: {item.discountedPrice * item.quantity} NOK</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <button onClick={handleCheckout}>Checkout</button>}
    </Div>
  );
}

export default Cart;
