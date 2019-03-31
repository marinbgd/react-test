import React from 'react';
import styles from './LeadCompany.scss';
import PropTypes from 'prop-types';
import LeadSingleDetail from '../LeadSingleDetail/LeadSingleDetail';

const LeadCompany = ({ name, contactPersonName, website }) => {
    return (
        <div className={styles.LeadCompany}>
            <LeadSingleDetail label="Company Name" value={name} additionalValueClassName={styles.CompanyName} />

            {contactPersonName && <LeadSingleDetail label="Contact Person" value={contactPersonName} />}

            {website && (
                <a className={styles.CompanyLink} href={website} target="_blank">
                    {website}
                </a>
            )}
        </div>
    );
};

LeadCompany.propTypes = {
    name: PropTypes.string.isRequired,
    contactPersonName: PropTypes.string,
    website: PropTypes.string
};

export default LeadCompany;
