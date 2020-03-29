import React, { Fragment } from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  return (
    <Fragment>
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="bread-bottom" />
      </div>
    </Fragment>
  );
};

export default burger;
