import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//Loading
import Loading from "./shared/Loading";

//URL
const BASE_URL = "https://fakestoreapi.com";

//Styles
import "./scss/productdetails.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      setProduct(response.data);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return (
      <Loading
        type={"spinningBubbles"}
        color={"#1a73e8"}
        height={"150px"}
        width={"150px"}
      />
    );
  }

  const { image, title, description, category, price } = product;
  document.title = title;

  return (
    <div className="details-container border-silver">
      <img src={image} alt="product" />
      <div className="info-container border-silver">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="category">
          <span>Category : </span>
          {category}{" "}
        </p>
        <div className="buttons-container">
          <span> {price} $</span>
          <Link className="transition button-hover" to="/products">
            Back to store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
