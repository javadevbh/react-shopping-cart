import React , { useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import '../scss/product.scss'

//Helper function
import { shortenTitle , isInCart , quantityCount } from '../../helper/functions';

//Context
import { CartContext } from '../../contexts/CartContextProvider';

//Icon
import trash from '../../assets/icons/trash.svg';

const Product = ({productData}) => {

    const {state , dispatch} = useContext(CartContext);

    return (
        <div className='card border-silver'>
            <div className='image-container'>
                <img src={productData.image}/>
            </div>
            <div className='card-body'>
                <h3>{shortenTitle(productData.title)}</h3>
                <p>{productData.price} $</p>
                <div className='card-footer'>
                    <Link to={`/products/${productData.id}`}>Details</Link>
                    <div className='buttons-container'>
                        {quantityCount(state , productData.id) > 1 && <button className='transition button-hover card-btn' onClick={() => dispatch({type : 'DECREASE' , payload : productData})}>-</button>}
                        {quantityCount(state , productData.id) === 1 && <button className='transition button-hover card-btn' onClick={() => dispatch({type : 'REMOVE_ITEM' , payload : productData})}><img src={trash}/></button>}
                        {quantityCount(state , productData.id) > 0 && <span className='product-counter'>{quantityCount(state,productData.id)}</span>}
                        {
                            isInCart(state,productData.id) ?
                            <button className='transition button-hover card-btn' onClick={() => dispatch({type : 'INCREASE' , payload : productData})}>+</button> :
                            <button className='transition button-hover add-to-cart' onClick={() => dispatch({type : 'ADD_ITEM' , payload : productData})}>Add to cart</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;