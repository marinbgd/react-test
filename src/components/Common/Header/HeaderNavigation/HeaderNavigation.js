import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './HeaderNavigation.scss';
import APP_ROUTES from 'Config/appRoutes';


const HeaderNavigation = () => {
    return (
        <nav>
            <NavLink
                className={"btn btn--link " + styles.HeaderNavLink}
                activeClassName="btn--active"
                exact to={APP_ROUTES.HOME}>
                Home
            </NavLink>
            <NavLink
                className={"btn btn--link " + styles.HeaderNavLink}
                activeClassName="btn--active"
                to={ APP_ROUTES.ABOUT }>
                About
            </NavLink>
            <NavLink
                className={"btn btn--link " + styles.HeaderNavLink}
                activeClassName="btn--active"
                to={ APP_ROUTES.LEADS }>
                Leads
            </NavLink>
        </nav>
    );
};

export default HeaderNavigation;
