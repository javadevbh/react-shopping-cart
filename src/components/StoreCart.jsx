import React, { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

//Helper function
import notify from "../helper/toastify";

//Context
import { CartContext } from "../contexts/CartContextProvider";

//Component
import Cart from "./shared/Cart";

const StoreCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items :</span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total Payment :</span>
            {state.total}
          </p>
          <div>
            <button
              onClick={() => {
                dispatch({ type: "CHECKOUT" });
                notify("success", "Your checked out successfully");
              }}
            >
              Checkout
            </button>
            <button
              onClick={() => {
                dispatch({ type: "CLEAR" });
                notify("success", "The shopping cart has been cleared");
              }}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {state.checkout && (
        <div>
          <Link to="/products">Buy more</Link>
        </div>
      )}

      {!state.checkout && state.itemsCounter === 0 && (
        <div>
          <Link to="/products">Go To Store</Link>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default StoreCart;
