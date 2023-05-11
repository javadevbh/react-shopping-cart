import React, { useContext } from "react";

//Loading
import Loading from "./shared/Loading";

//Styles
import "./scss/store.scss";

//Context
import { ProductsContext } from "../contexts/ProductContextProvider";

//Component
import Product from "./shared/Product";

const Store = () => {
  const products = useContext(ProductsContext);
  document.title = "Products";

  if (!products.length) {
    return (
      <Loading
        type={"spinningBubbles"}
        color={"#1a73e8"}
        height={"150px"}
        width={"150px"}
      />
    );
  }

  return (
    <div className="container products-container">
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
