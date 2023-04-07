import React, { useContext } from "react";
import { Link , useParams } from "react-router-dom";

//Context
import { ProductsContext } from "../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useContext(ProductsContext);
  const { image , title , description , category , price } = product[id - 1];
  document.title=title;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><span>Category : {category} </span></p>
        <div>
            <span> {price} $</span>
            <Link to='/products'>Back to store</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
