import React from 'react';

//Helper function
import { shortenTitle } from '../helper/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} style={{width : '200px'}}/>
            <h3>{shortenTitle(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href="#">Details</a>
                <div>
                    <button>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;