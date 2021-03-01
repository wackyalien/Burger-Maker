import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES ={
    salad: 15,
    cheese: 20,
    meat: 30,
    bacon: 40,
}
export default class BurgerBuilder extends Component{
    state = {
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice: 25
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCounted = oldCount+1
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type]= updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({totalPrice:newPrice, ingredient: updatedIngredient})
    }
    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        if(oldCount<=0){
            return
        }
        const updatedCounted = oldCount-1
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type]= updatedCounted;
        const priceReduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceReduction;
        this.setState({totalPrice:newPrice, ingredient: updatedIngredient})
    }
    render(){
        return (
            <div>
                <Burger ingredient={this.state.ingredient}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientSubtract= {this.removeIngredientHandler}/>
            </div>
        )
    }
}