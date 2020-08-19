import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger-builder/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/burger-builder/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;