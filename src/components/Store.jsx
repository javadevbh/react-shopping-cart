import React , { useContext } from 'react';

//Styles
import "./scss/store.scss"

//Context
import { ProductsContext } from '../contexts/ProductContextProvider';

//Component
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext);
    document.title = 'Products' ;

    return (
        <div className='container products-container'>
            {
                products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;