import React from 'react';
import styles from './LeadCompany.scss';
import PropTypes from 'prop-types';


const LeadCompany = ({name, contactPersonName, website}) => {
    return (
        <div className={styles.LeadCompany}>
            <span className={styles.LeadCompanyValue}>{name}</span>
            <span className={styles.LeadCompanyValue}>{contactPersonName}</span>
            <span className={styles.LeadCompanyValue}>{website}</span>
        </div>
    );
};

LeadCompany.propTypes = {
    name: PropTypes.string.isRequired,
    contactPersonName: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
};

export default LeadCompany;
