import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import IndividualProduct from "./components/IndividualProduct";
import Div from "./components/defaultStyles/Div";
import Contact from "./components/Contact";

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
