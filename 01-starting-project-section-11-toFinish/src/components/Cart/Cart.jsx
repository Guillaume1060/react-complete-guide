import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../store/Cart-context.js'


const Cart = (props) => {
    const carCtx = useContext(CartContext)

const cartItems = <ul className={classes['cart-items'] } >{
    carCtx.items.map(item=><li>{item.name}</li>)}</ul>

    return (
        <Modal onCart={props.onCart} >
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions} >
                <button onClick={props.onCart} className={classes['button--alt']}>Close</button>
                <button className={classes.button } >Order</button>     
            </div>
        </Modal>
    )
}

export default Cart