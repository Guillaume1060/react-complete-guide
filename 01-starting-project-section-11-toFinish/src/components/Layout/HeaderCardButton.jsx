import classes from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/Cart-context' // we not import the provider !!
import { useContext } from 'react';

const HeaderCardButton=(props) => {
const ctx = useContext(CartContext);
const numberOfCartItems = ctx.items.reduce((cur,item)=>{return cur+item.amount},0);

    return (
        <button onClick={props.onCart} className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCardButton