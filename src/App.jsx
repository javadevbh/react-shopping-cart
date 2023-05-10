import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

//Component
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import StoreCart from "./components/StoreCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<StoreCart/>} />
          <Route from="/*" element={<Navigate to="/products"/>} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
