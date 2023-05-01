import React, { useContext } from 'react';

//Context
import { CartContext } from '../../contexts/CartContextProvider';

//Helper functions
import { shortenTitle } from '../../helper/functions';

//Icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {

    const {image,title,price,quantity} = props.data;

    const {dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={image} alt='item-image'/>
            <div>
                <h3>{shortenTitle(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span>{quantity} $</span>
            </div>
            <div>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type : "DECREASE" , payload : props.data})}>-</button> :
                    <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : props.data})}><img style={{width : "20px"}} src={trashIcon} alt='trash'/></button>
                }
                <button onClick={() => dispatch({type : "INCREASE" , payload : props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;