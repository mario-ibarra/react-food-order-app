import React, { Fragment } from 'react';
import Card from '../card/Card';
import classes from './Banner.module.css';

const Banner = () => {
  return (
    <Fragment>
      <Card className={classes['banner-container']}>
        <h2>Fantastic Meals</h2>
        <p>
          Our meals are prepared by our professional cooks with prime fresh and
          quality ingredients.{' '}
        </p>
        <p>
          Free delivering for orders over 20€ and a distance within 5
          kilometers from our restaurant.
        </p>
        <p> Order now and discover the new way of healty eating!</p>
      </Card>
    </Fragment>
  );
};

export default Banner;
