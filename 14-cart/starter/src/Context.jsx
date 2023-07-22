import { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "./data";
import { reducer } from "./reducer";
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotals } from "./utils";

const AppContext = createContext();
const url = "https://www.course-api.com/react-useReducer-cart-project";
const initialState = {
  loading: false,
  cart: new Map(),
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, id });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, id });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, id });
  };
  const displayItems = (id) => {
    dispatch({ type: DISPLAY_ITEMS });
  };
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    dispatch({ type: DISPLAY_ITEMS, data });
  };
  useEffect(() => {
    fetchData();
    dispatch({ type: LOADING });
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
