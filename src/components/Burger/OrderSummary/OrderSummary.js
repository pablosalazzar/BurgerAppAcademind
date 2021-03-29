import Aux from '../../../hoc/Auxx'

const orderSummary = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            );
        })

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>
                A delicious burger with the following ingredients : 
            </p>
            <ul>
                {ingredients}
            </ul>
            <p>
                Continue with the checkout ? 
            </p>
        </Aux>
    )
}

export default orderSummary;