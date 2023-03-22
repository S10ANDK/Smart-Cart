import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProductsDisplayed from "./components/Products";
import IndividualProduct from "./components/IndividualProduct";
import Div from "./components/styles/Div";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Div>
        <h1>Hello world!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ProductsDisplayed />
      </Div>
    </>
  );
}

function Cart() {
  return (
    <Div>
      <h1>Cart</h1>
    </Div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<IndividualProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
