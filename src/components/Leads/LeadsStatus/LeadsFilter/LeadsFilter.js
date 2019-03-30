import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Common/Button/Button';
import styles from './LeadsFilter.scss';
import { LEAD_CATEGORIES } from '../LeadsCategories.constants';
import { getButtonFilterStyleNames } from './LeadsFilter.helper';


const LeadsFilter = ({categoryClickCallBack, activeCategory}) => {
    return (
        <aside className={styles.LeadsFilter}>
            <h4>Filters:</h4>
            {
                Object.values(LEAD_CATEGORIES).map(category => (
                    <Button
                        buttonStyles={getButtonFilterStyleNames(category, activeCategory)}
                        key={category}
                        label={category}
                        onButtonClick={() => categoryClickCallBack(category)}
                    />
                ))
            }
        </aside>
    );
};

LeadsFilter.propTypes = {
    categoryClickCallBack: PropTypes.func.isRequired,
    activeCategory: PropTypes.string,
};

export default LeadsFilter;
