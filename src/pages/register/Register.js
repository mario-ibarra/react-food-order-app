import React, { Fragment, useState } from 'react';
import Card from '../../components/UI/card/Card';
import Button from '../../components/UI/Button/Button';
import Modal from '../../components/UI/modal/Modal';
import classes from './Register.module.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState();

  let message = '';
  const registerUserHandler = (e) => {
    e.preventDefault();

    if (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmPassword.trim().length === 0
    ) {
     setError({
        title: 'Empty fiels Error!',
        message: 'Please fill all fields as required!'
    
      });
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setError({
        title: 'Password Validation Error!',
        message: 'Passwords do not match. Please fill the correct passwords!',
      });
      return;

    } else {
      const data = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      };
      console.log(data);
    }

    clearInputs();
  };

  const errorHandler = () => {
    setError(null)
  }

  const clearInputs = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <Fragment>
      {error && (
        <Modal title={error.title} message={error.message} onConfirm={errorHandler}/>
      )}

      <Card className={classes['form-control']}>
        <h2>Register</h2>
        <form onSubmit={registerUserHandler}>
          <div className={classes['form-controls']}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={classes['form-controls']}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={classes['form-controls']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes['form-controls']}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes['form-controls']}>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button className={classes['btn-register']} type="submit">
            Register
          </Button>
        </form>
        {message}
      </Card>
    </Fragment>
  );
};

export default Register;
