import React from 'react';
import styles from './LeadPerson.scss';
import PropTypes from 'prop-types';


const LeadPerson = ({givenName, familyName, gender}) => {
    return (
        <div className={styles.LeadPerson}>
            <span className={styles.LeadPersonValue}>{givenName}</span>
            <span className={styles.LeadPersonValue}>{familyName}</span>
            <span className={styles.LeadPersonValue}>{gender}</span>
        </div>
    );
};

LeadPerson.propTypes = {
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
};

export default LeadPerson;
