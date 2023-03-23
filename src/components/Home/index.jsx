import React from 'react';
import Div from "../defaultStyles/Div";
import ProductsDisplayed from "./Products";
import Search from "./Search";

function Home() {
    return (
      <>
        <Div>
          <h1>Products</h1>
          <Search />
          <ProductsDisplayed />
        </Div>
      </>
    );
  }

export default Home;