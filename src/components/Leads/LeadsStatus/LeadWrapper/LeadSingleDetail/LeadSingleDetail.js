import React from 'react';
import PropTypes from 'prop-types';
import styles from './LeadSingleDetail.scss';

const LeadSingleDetail = ({ label, value, additionalValueClassName = '' }) => {
    return (
        <div className={styles.SingleDetail}>
            <span className={styles.SingleDetailLabel}>{label}:</span>
            <span className={[styles.SingleDetailValue, additionalValueClassName].join(' ')}>{value}</span>
        </div>
    );
};

LeadSingleDetail.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    additionalValueClassName: PropTypes.string
};

export default LeadSingleDetail;
