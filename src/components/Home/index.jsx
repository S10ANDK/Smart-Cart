import React from 'react';
import Div from "../defaultStyles/Div";
import ProductsDisplayed from "./Products";

function Home() {
    return (
      <>
        <Div>
          <h1>Products</h1>
          <ProductsDisplayed />
        </Div>
      </>
    );
  }

export default Home;