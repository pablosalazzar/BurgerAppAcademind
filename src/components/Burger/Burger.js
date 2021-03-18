import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'
import { number } from 'prop-types';

const burger = (props) => {
    
    console.log(props.ingredients);
    const transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map( (_,i) =>{
                return <BurgerIngredient key={igKey+i} type={igKey} />
            });
        });

    return(
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;