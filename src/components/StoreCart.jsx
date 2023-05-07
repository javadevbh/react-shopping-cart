import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import cartEmpty from "../assets/icons/cart-empty.png";

//Styles
import "./scss/storecart.scss";

//Helper function
import notify from "../helper/toastify";

//Context
import { CartContext } from "../contexts/CartContextProvider";

//Component
import Cart from "./shared/Cart";

const StoreCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        <div className="cart-info-container">
          {state.selectedItems.map((item) => (
            <div className="cart-info border-silver" key={item.id}>
              <Cart data={item} />
            </div>
          ))}
        </div>
        {state.itemsCounter > 0 && (
          <div className="storeCart-payment border-silver">
            <p>
              <span>Total Items :</span>
              {state.itemsCounter}
            </p>
            <p>
              <span>Total Payment :</span>
              {state.total} $
            </p>
            <div className="buttons-container">
              <button
                className="clear"
                onClick={() => {
                  dispatch({ type: "CLEAR" });
                  notify("success", "The shopping cart has been cleared");
                }}
              >
                Clear
              </button>
              <button
                className="checkout"
                onClick={() => {
                  dispatch({ type: "CHECKOUT" });
                  notify("success", "Your checked out successfully");
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
      {state.checkout && (
        <div className="cart-empty">
          <img src={cartEmpty} alt="cart-empty" />
          <Link className="buy-more transition button-hover" to="/products">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className="cart-empty">
          <img src={cartEmpty} alt="cart-empty" />
          <Link className="buy-more transition button-hover" to="/products">Go To Store</Link>
        </div>
      )}
    </>
  );
};

export default StoreCart;
