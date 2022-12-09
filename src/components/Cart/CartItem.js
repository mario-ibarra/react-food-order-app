
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  
  const price = props.price.toFixed(2)
 
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>
          <ChevronLeftIcon />
        </button>
        <button onClick={props.onAdd}>
          {' '}
          <ChevronRightIcon />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
