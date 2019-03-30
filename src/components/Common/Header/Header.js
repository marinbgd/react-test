import React from 'react';
import PropTypes from 'prop-types';
import UserMenu from 'Common/Header/UserMenu/UserMenu';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import { getTitleFromLocation } from './Header.util';
import styles from './Header.scss';


const Header = ({username}) => {

    return (
        <header className={styles.Header}>

            <div className="wrapper position-relative">
                <HeaderNavigation/>

                <aside className={styles.UserMenuHolder}>
                    <UserMenu username={username}/>
                </aside>

                <h1 className={styles.Title}>{ getTitleFromLocation(location.pathname) }</h1>
            </div>
        </header>
    );
};

Header.propTypes = {
    username: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
};

export default Header;
