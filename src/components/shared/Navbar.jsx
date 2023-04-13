import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { CartContext } from '../../contexts/CartContextProvider';

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <nav>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><img src={shopIcon} alt="shopIcon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;