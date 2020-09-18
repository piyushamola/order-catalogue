import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";

export const createOrder = (order) => (dispatch) => {
        console.log(order);
      dispatch({ type: CREATE_ORDER, payload: order });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};
