import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>RosyMeals</h1>
                <HeaderCardButton onCart={props.onCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="table of food" />
            </div>
        </>
    )
}


export default Header