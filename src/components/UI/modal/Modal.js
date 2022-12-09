import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from '../card/Card';
import Button from '../Button/Button';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};


const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        {' '}
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
        {props.children}
      <footer className={classes.actions}>
       {props.onConfirm && <Button onClick={props.onConfirm}>Close</Button>}
     
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        >{props.children}</ModalOverlay>,
        document.getElementById('modal-root')
      )}
      
    </Fragment>
  );
};

export default Modal;
