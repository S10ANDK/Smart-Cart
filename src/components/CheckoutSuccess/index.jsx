import React from 'react';
import Div from '../defaultStyles/Div';
import * as S from './index.styled';

function CheckoutSuccess() {
  return (
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
  );
}

export default CheckoutSuccess;
