import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={StoreCart}/>
          <Redirect from="/" to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
