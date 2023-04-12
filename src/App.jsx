import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Context
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

//Component
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect from="/" to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
