import React from 'react';
import styles from './LeadWrapper.scss';
import PropTypes from 'prop-types';
import LeadSingleDetail from './LeadSingleDetail/LeadSingleDetail';
import LeadCategory from './LeadCategory/LeadCategory';
import LeadPerson from './LeadPerson/LeadPerson';
import LeadCompany from './LeadCompany/LeadCompany';


const LeadWrapper = ({lead}) => {
    return (
        <div className={styles.LeadWrapper}>
            <LeadSingleDetail label="Type" value={lead.type} />
            <LeadCategory leadCategory={lead.category} />
            <LeadSingleDetail label="Address" value={lead.address} />
            <LeadSingleDetail label="Phone" value={lead.mobilePhone} />
            <LeadSingleDetail label="E-mail" value={lead.email} />

            {
                lead.type === 'person' &&
                <LeadPerson
                    givenName={lead.givenName}
                    gender={lead.gender}
                    familyName={lead.familyName}
                />
            }

            {
                lead.type === 'company' &&
                <LeadCompany
                    contactPersonName={lead.contactPersonName}
                    name={lead.name}
                    website={lead.website}
                />
            }
        </div>
    );
};

LeadWrapper.propTypes = {
    lead: PropTypes.object.isRequired
};

export default LeadWrapper;
