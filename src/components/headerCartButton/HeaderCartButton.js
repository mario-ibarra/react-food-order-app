import React, { useContext } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  }, 0)


 
  return (
    <button className={classes.button} onClick={props.onClick} >
      
      <ShoppingBasketIcon className={classes['shop-bask']} />
      <span>Your Cart:</span>
      <span className={classes['cart-quantity']}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
