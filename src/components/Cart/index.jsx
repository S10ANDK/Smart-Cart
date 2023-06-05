import React from 'react';
import Div from '../defaultStyles/Div';
import { useCart } from '../hooks/useCart';
import * as S from './index.styled';
import { Helmet } from 'react-helmet';

function Cart() {
  const { cart, clearCart, removeFromCart } = useCart();

  const countQuantities = (cart) => {
    const cartProductQuantity = [];
    cart.forEach((item) => {
      const existingItem = cartProductQuantity.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartProductQuantity.push({ ...item, quantity: 1 });
      }
    });

    return cartProductQuantity;
  };

  const cartList = countQuantities(cart);
  console.log(cartList);

  const calculateTotalPrice = (cartProduct) => {
    return cartProduct.reduce(
      (accumulator, currentProduct) =>
        accumulator + currentProduct.discountedPrice * currentProduct.quantity,
      0
    );
  };

  const handleCheckout = () => {
    console.log(
      'Cart contents:',
      cart,
      'total price:',
      calculateTotalPrice(cartList).toFixed(2)
    );
    clearCart();
  };

  return (
    <>
      <Helmet>
        <title>Smart Cart | Cart</title>
        <meta
          name="description"
          content="Your cart containing all your products for purchase"
        />
      </Helmet>
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
            {cartList.length === 0 ? (
              <S.Message>No products in the cart</S.Message>
            ) : (
              cartList.map((item) => (
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
                  <span> {calculateTotalPrice(cartList).toFixed(2)} NOK</span>
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
    </>
  );
}

export default Cart;
