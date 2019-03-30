import React from 'react';
import PropTypes from 'prop-types';
import { getClassNameForCategory } from './LeadCategory.helper';
import LeadSingleDetail from '../LeadSingleDetail/LeadSingleDetail'


const LeadCategory = ({leadCategory}) => {
    return (
        <LeadSingleDetail
            label="Category"
            value={leadCategory}
            additionalValueClassName={getClassNameForCategory(leadCategory)}
        />
    );
};

LeadCategory.propTypes = {
    leadCategory: PropTypes.string.isRequired
};

export default LeadCategory;
