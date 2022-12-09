import React from 'react'
import Card from '../../components/UI/card/Card';
import Button from '../../components/UI/Button/Button';
import classes from './Login.module.css'

export const Login = () => {
  return (
    <Card className={classes['form-control']}>
      <h2>Log In</h2>
      <form>
        <div className={classes['form-controls']}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes['form-controls']}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <Button className={classes['btn-sign-in']} type="submit">
          Sign In
        </Button>
      </form>
    </Card>
  );
}

export default Login;
