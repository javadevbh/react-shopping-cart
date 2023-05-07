import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Styles
import "../scss/navbar.scss"

//Context
import { CartContext } from '../../contexts/CartContextProvider';

//Icons
import shopIcon from "../../assets/icons/shop.svg";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <nav className='container-fluid'>
            <div className='container navbar-content'>
                <Link className='nav-item' to="/products">Products</Link>
                <div className='shopping-icon'>
                    <Link to="/cart"><img src={shopIcon} alt="shopIcon" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;