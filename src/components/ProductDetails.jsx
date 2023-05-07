import React, { useContext } from "react";
import { Link , useParams } from "react-router-dom";

//Styles
import './scss/productdetails.scss'

//Context
import { ProductsContext } from "../contexts/ProductContextProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useContext(ProductsContext);
  const { image , title , description , category , price } = product[id - 1];
  document.title=title;
  return (
    <div className="details-container border-silver">
      <img src={image} alt="product" />
      <div className="info-container border-silver">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="category"><span>Category : </span>{category} </p>
        <div className="buttons-container">
            <span> {price} $</span>
            <Link className="transition button-hover" to='/products'>Back to store</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
