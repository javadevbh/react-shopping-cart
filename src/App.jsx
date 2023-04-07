import { Switch, Route, Redirect } from "react-router-dom";

//Context
import ProductContextProvider from "./contexts/ProductContextProvider";

//Component
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect from="/" to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
