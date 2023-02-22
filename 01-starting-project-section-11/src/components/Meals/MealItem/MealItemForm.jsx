import classes from './MealItemForm.module.css'
import Input from '../../../composants/Input'
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid] = useState(true)
    const amountInputRef = useRef();

    const submitHandler = (e) => {
    e.preventDefault();
    /// x.current.value is ALWAYS a string (below)
    const entreredAmount = amountInputRef.current.value;
    console.log(entreredAmount);
    const entreredAmountNumber = +entreredAmount

    if (entreredAmount.trim().length ===0 || entreredAmountNumber <1 || entreredAmountNumber >5) {
        setAmountIsValid(false)
        return
    }
    props.onAddToCart(entreredAmountNumber)
}

    return (
        <form onSubmit={submitHandler} className={classes.form} >
            <Input label='Amount' input={{
                ref:{amountInputRef},
                id: 'amount_'+props.id,
                type: 'number',
                defaultValue: '1',
                min: '1',
                max:'5',
                step:'1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm