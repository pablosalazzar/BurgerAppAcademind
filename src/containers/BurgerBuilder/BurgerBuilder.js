import React, { Component } from "react";
import Aux from '../../hoc/Auxx/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../instances/axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:   1.3,
    bacon: 0.7,
}

class BurguerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading:false,
        error:false
    }

    componentDidMount(){
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients:response.data
                })
            }).catch(err => {
                this.setState({error:true})
            })
    }

    updatePurchaseState = (ingredients) => {
        
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((acumulator,currentValue) => {
                return acumulator+currentValue
            })
            
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const updatedIngridients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        };

        this.setState({
            ingredients: updatedIngridients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        })
        this.updatePurchaseState(updatedIngridients);
    }

    lessIngresientHandler = (type) => {

        const quantity = this.state.ingredients[type];

        if(quantity <= 0){
            return;
        }
        const updatedIngridients = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] - 1
        }

        this.setState({
            ingredients: updatedIngridients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        })   
        this.updatePurchaseState(updatedIngridients); 
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () =>{
        this.setState({loading:true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name:'Pablo Alejandro Salazar Santizo',
                addres:{
                    street:'Street 1',
                    zipCode: '123',
                    country: 'Guatemala'
                },
                email:'salazarpabloale@gmail.com'
            },
            deliveryMethos: 'fast',
        }

        axios.post('/orders.json',order)
            .then(response => {
                console.log(response)
                this.setState({loading:false, purchasing:false})
            })
            .catch(error => {
                console.log(error)
                this.setState({loading:false, purchasing:false})
            });

    }

    render(){
        const disableInfo = {...this.state.ingredients}
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummary = null
        
        
        

        let burger = this.state.error? <p>Ingredient cant be loaded</p>:<Spinner/>

        if(this.state.ingredients){
            burger = (
                <Aux>
                <Burger ingredients={this.state.ingredients}/>
            <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.lessIngresientHandler}
                disabled = {disableInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                purchasing = {this.purchaseHandler}
            />
            </Aux>
            );

            orderSummary = <OrderSummary
            ingredients = {this.state.ingredients}
            purchaseCanceled = {this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler}
            price = {this.state.totalPrice}/>;
            
        }

        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                
                <Modal 
                    show={this.state.purchasing}
                    modalClose = {this.purchaseCancelHandler}    
                >
                    {orderSummary}
                </Modal>
                

                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurguerBuilder,axios);


