import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let tranformIngredient = Object.keys(props.ingredient).map(igkey => {
        return [...Array(props.ingredient[igkey])].map((_, i) => {
            return <BurgerIngredient key={igkey + 1} type={igkey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    console.log(tranformIngredient.length)
    if (tranformIngredient.length === 0) {
        tranformIngredient = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {tranformIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
export default Burger;