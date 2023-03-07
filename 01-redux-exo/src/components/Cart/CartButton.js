import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../store/actions";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleCart());
  };

  const cartQuantitie = useSelector((state) => state.cart.totalCart);
  return (
    <button onClick={toggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantitie}</span>
    </button>
  );
};

export default CartButton;
