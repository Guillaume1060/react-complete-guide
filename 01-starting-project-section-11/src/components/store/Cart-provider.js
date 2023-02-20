import CartContext from "./Cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add":
      const updateItems = state.items;
      return {
        items: [...state, action.item],
        totalAmount: state.totalAmount + action.item.totalAmount,
      };
    case "remove":
      return {
        items: [...state],
        totalAmount: state.totalAmount - action.item.totalAmount,
      };
    default:
      throw new Error();
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "add", item: item });
  };
  const removeItemToCart = (id) => {
    dispatchCartAction({ type: "remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
