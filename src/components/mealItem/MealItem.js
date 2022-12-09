import React, { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from '../mealItemForm/MealItemForm';

import CartContext from '../../store/cart-context';


const MealItem = (props) => {
 const cartCtx = useContext(CartContext)

  const price = `${props.price.toFixed(2)} €`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    
  };

  return (
    <li className={classes.mealContainer}>
      <div className={classes.left}>
        <h2>{props.name}</h2>
        <div className={classes['img-container']}>
          <img src={props.image} alt={props.name} className={classes.img} />
          <div className={classes['info-container']}>
            <div className={classes['meal-description']}>{props.description}</div>
            <div className={classes['info-container__price']}>{price}</div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
