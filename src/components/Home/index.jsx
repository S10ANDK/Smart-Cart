import React from 'react';
import Div from '../defaultStyles/Div';
import ProductsDisplayed from './Products';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Smart Cart | Home</title>
        <meta
          name="description"
          content="Affordable products for all your needs"
        />
      </Helmet>
      <Div>
        <h1>Products</h1>
        <ProductsDisplayed />
      </Div>
    </>
  );
}

export default Home;
