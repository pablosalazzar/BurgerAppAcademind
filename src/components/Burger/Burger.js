import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.css'

const burger = (props) => {
    
    return(
        <div className={styles.Burger}>

            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;