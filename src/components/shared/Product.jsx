import React from 'react';
import { Link } from 'react-router-dom';

//Helper function
import { shortenTitle } from '../../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width : '200px'}}/>
            <h3>{shortenTitle(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;