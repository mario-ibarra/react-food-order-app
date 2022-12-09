import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import HeaderCartButton from '../../headerCartButton/HeaderCartButton';


const Navbar = (props) => {

 const userLogIn = true;
  return (
    <div className={classes.header}>
      <nav className={classes.nav}>
        <h1 className={classes.logo}>Delicious Meals</h1>

        <ul className={classes['nav ul']}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {!userLogIn ? (
            <li>
              <NavLink to="/login">LogIn</NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          )}

             <HeaderCartButton onClick={props.onShowCart}/>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
