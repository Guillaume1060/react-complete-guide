import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const itemQuantity = useSelector((state) => state.cart.shoppingCart);
  const isVisible = useSelector((state) => state.cart.isVisible);
  const shoppingCart = (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{
            title: "Test Item",
            quantity: itemQuantity,
            total: 18,
            price: 6,
          }}
        />
      </ul>
    </Card>
  );

  return isVisible && shoppingCart;
};

export default Cart;
