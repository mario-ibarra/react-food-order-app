import React, { useContext, Fragment } from 'react';
import Modal from '../UI/modal/Modal';
import Button from '../UI/Button/Button';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRevomeHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRevomeHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Fragment>
      <Modal title="Your items" onClose={props.onClose}>
        <span className={classes.total}>{cartItems}</span>
        <div className={classes.actions}>
          <Button className={classes['button--close']} onClick={props.onClose}>
            Close
          </Button>{' '}
          {hasItems && (
            <div className={classes['cart-total']}>
              CartTotal: {totalAmount} €
            </div>
          )}
          {hasItems && <Button className={classes.button}>Order</Button>}
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
