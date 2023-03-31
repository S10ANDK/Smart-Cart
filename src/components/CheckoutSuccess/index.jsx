import React from 'react';
import Div from '../defaultStyles/Div';
import { Link } from 'react-router-dom';

function CheckoutSuccess() {
  return (
    <Div>
      <h1>Success!</h1>
      <p>You have successfully ordered your products!</p>
      <Link to={'/'}>Continue shopping</Link>
    </Div>
  );
}

export default CheckoutSuccess;
