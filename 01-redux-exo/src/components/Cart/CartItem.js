import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { addItem, reduceItem } from "../store/actions";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const reduceQty = () => {
    dispatch(reduceItem());
  };
  const addQty = () => {
    dispatch(addItem());
  };

  const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={reduceQty}>-</button>
          <button onClick={addQty}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
