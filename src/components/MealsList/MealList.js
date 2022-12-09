import React from 'react';
import MealItem from '../mealItem/MealItem';
import classes from './MealList.module.css';
import Card from '../UI/card/Card';

import { DUMMY_DATA } from '../../data/data';

const MealList = () => {
  const mealList = DUMMY_DATA.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      image={meal.image}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card className={classes['mealList-container']}>
      <ul>{mealList}</ul>
    </Card>
  );
};

export default MealList;
