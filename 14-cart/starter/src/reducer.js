import { useReducer } from "react";
import cartItems from "./data";
import {
  INCREASE,
  DECREASE,
  CLEAR_CART,
  REMOVE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    // state.cart.delete(action.id); //We should not mutate the objects,so create new Map
    const newCart = new Map(state.cart);
    newCart.delete(action.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.id);
    if (item.amount === 1) {
      newCart.delete(action.id);
      return { ...state, cart: newCart };
    }
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(action.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.data.map((item) => [item.id, item]));
    return { ...state, cart: newCart, loading: false };
  }
  throw new Error(`No matching action type: ${action.type}`);
};
