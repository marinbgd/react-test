import React from 'react';
import styles from './NonAuthHeader.scss';
import logo from 'Images/javascript-logo.png';

const LoginHeader = () => {
    return (
        <div className={styles.Container}>
            <img width="106" height="150" src={logo} />
        </div>
    );
};

export default LoginHeader;
