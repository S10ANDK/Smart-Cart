import React from 'react';
import Div from '../defaultStyles/Div';
import * as S from './index.styled';
import { Helmet } from 'react-helmet';

function CheckoutSuccess() {
  return (
    <>
      <Helmet>
        <title>Smart Cart | Checkout Success</title>
        <meta name="description" content="Your purchase was successful" />
      </Helmet>
      <Div>
        <h1>Success!</h1>
        <S.SuccessContainer>
          <S.SuccessMessage>
            Congratulations!{' '}
            <span>You have successfully completed your order.</span>
          </S.SuccessMessage>
          <S.ContinueShoppingLink to={'/'}>
            Continue shopping
          </S.ContinueShoppingLink>
        </S.SuccessContainer>
      </Div>
    </>
  );
}

export default CheckoutSuccess;
