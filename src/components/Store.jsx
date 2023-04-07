import React , { useContext } from 'react';

//Context
import { ProductsContext } from '../contexts/ProductContextProvider';

//Component
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext);
    document.title = 'Products' ;

    return (
        <div style={{display : 'flex' , flexWrap : 'wrap' , justifyContent : 'space-between' , alignItems : 'center'}}>
            {
                products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;