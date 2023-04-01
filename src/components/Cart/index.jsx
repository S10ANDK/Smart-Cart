import React from 'react';
import Div from '../defaultStyles/Div';
import { useCart } from '../hooks/useCart';
import * as S from './index.styled';

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

  const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.discountedPrice * currentItem.quantity,
      0
    );
  };

  const handleCheckout = () => {
    console.log(
      'Cart contents:',
      cart,
      'total price:',
      calculateTotalPrice(cartItemsWithQuantity).toFixed(2)
    );
    clearCart();
  };

  const cartItemsWithQuantity = countQuantities(cart);

  return (
    <Div>
      <h1>Cart</h1>
      <S.CartContainer>
        <S.ProductsList>
          {cart.length > 0 && (
            <S.ClearCartButtonContainer>
              <S.ClearCartButton onClick={clearCart}>
                Clear cart
              </S.ClearCartButton>
            </S.ClearCartButtonContainer>
          )}
          {cartItemsWithQuantity.length === 0 ? (
            <S.Message>No products in the cart</S.Message>
          ) : (
            cartItemsWithQuantity.map((item) => (
              <S.ProductContainer key={item.id}>
                <S.ProductHeadingAndImageContainer>
                  <S.ProductHeading>{item.title}</S.ProductHeading>
                  <S.ProductImage src={item.imageUrl}></S.ProductImage>
                </S.ProductHeadingAndImageContainer>
                <S.ProductInfoContainer>
                  <S.RemoveButton onClick={() => removeFromCart(item.id)}>
                    x
                  </S.RemoveButton>
                  <p>Quantity: {item.quantity}</p>
                  <S.Price>{item.discountedPrice} NOK</S.Price>
                  {/* <p>
                Total: {(item.discountedPrice * item.quantity).toFixed(2)} NOK
              </p> */}
                </S.ProductInfoContainer>
              </S.ProductContainer>
            ))
          )}
        </S.ProductsList>

        {cart.length > 0 && (
          <>
            <S.TotalContainer>
              <S.TotalPrice>
                Total price:
                <span>
                  {' '}
                  {calculateTotalPrice(cartItemsWithQuantity).toFixed(2)} NOK
                </span>
              </S.TotalPrice>
              <S.CheckoutButtonContainer>
                <S.CheckoutButton
                  to={'/checkout-success'}
                  onClick={handleCheckout}
                >
                  Checkout
                </S.CheckoutButton>
              </S.CheckoutButtonContainer>
            </S.TotalContainer>
          </>
        )}
      </S.CartContainer>
    </Div>
  );
}

export default Cart;
