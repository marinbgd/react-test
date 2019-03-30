import React from 'react';
import styles from './PageTopSelector.scss';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../Leads.routes';


const PageTopSelector = () => {
    return (
        <aside className={styles.PageTopSelector}>
            <nav className="wrapper">
                <NavLink
                    className={'btn ' + styles.Link}
                    activeClassName={styles.Link__active}
                    exact
                    to={ROUTES.TYPES.ALL}>
                    All Leads
                </NavLink>
                <NavLink
                    className={'btn ' + styles.Link}
                    activeClassName={styles.Link__active}
                    to={ROUTES.TYPES.PERSON}>
                    Person Leads
                </NavLink>
                <NavLink
                    className={'btn ' + styles.Link}
                    activeClassName={styles.Link__active}
                    to={ROUTES.TYPES.COMPANY}>
                    Company Leads
                </NavLink>
            </nav>
        </aside>
    );
};

export default PageTopSelector;
