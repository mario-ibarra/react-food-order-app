import React from 'react'
import MealList from '../../components/MealsList/MealList'
import Banner from '../../components/UI/banner/Banner'
import classes from './Home.module.css'

const Home = () => {
  return (
    <div className={classes['home-container']}>
      <Banner />
      <MealList />
      </div>
  )
}

export default Home