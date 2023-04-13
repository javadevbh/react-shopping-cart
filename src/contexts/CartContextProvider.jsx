import React, { useReducer , createContext } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = item => {
  const itemsCounter = item.reduce((total , product) => total + product.quantity,0);
  const total = item.reduce((total , product) => total + product.price* product.quantity,0);
  return {itemsCounter , total}
}

const stateReducer = (state, action) => {
  switch (action.type) {
    //If we selected item first time
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems)
      };
    //If we have one product with this id in cart
    case "REMOVE_ITEM":
      const index = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[index].quantity--;
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(state.selectedItems)
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };

    default:
      return state
  }
};

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <CartContext.Provider value={{state,dispatch}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;
