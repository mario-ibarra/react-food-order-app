import React, { useState } from 'react';
import CartProvider from '../../store/CartProvider';
import Cart from '../Cart/Cart';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false)
  }



  return (
    <CartProvider>
      <Navbar onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <main>{children}</main>
    </CartProvider>
  );
};

export default Layout;
