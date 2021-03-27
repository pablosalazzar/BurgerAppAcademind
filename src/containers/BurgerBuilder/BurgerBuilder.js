import React, { Component } from "react";
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat:   1.3,
    bacon: 0.7,
}

class BurguerBuilder extends Component{

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        this.setState({
            ingredients:{
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] + 1
            },
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
        })
    }

    lessIngresientHandler = (type) => {

        const quantity = this.state.ingredients[type];
        if(quantity <= 0){
            return;
        }
        
        this.setState({
            ingredients:{
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] - 1
            },
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
        })    
    }


    render(){
        const disableInfo = {...this.state.ingredients}
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.lessIngresientHandler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurguerBuilder;


