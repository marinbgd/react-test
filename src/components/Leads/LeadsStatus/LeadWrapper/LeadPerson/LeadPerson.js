import React from 'react';
import styles from './LeadPerson.scss';
import PropTypes from 'prop-types';
import LeadSingleDetail from '../LeadSingleDetail/LeadSingleDetail';

const LeadPerson = ({ givenName, familyName, gender }) => {
    return (
        <div className={styles.LeadPerson}>
            <LeadSingleDetail label="Given Name" value={givenName} />

            {familyName && <LeadSingleDetail label="Family Name" value={familyName} />}

            {gender && <LeadSingleDetail label="Gender" value={gender} />}
        </div>
    );
};

LeadPerson.propTypes = {
    givenName: PropTypes.string.isRequired,
    familyName: PropTypes.string,
    gender: PropTypes.string
};

export default LeadPerson;
