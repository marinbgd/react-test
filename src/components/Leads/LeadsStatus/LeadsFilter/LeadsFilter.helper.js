import styles from './LeadsFilter.scss';


export const getButtonFilterStyleNames = (category, activeCategory) => {
    let classNamesArray = [styles.ButtonFilter];

    if ( category === activeCategory ) {
        classNamesArray.push(styles.ButtonFilterActive);
    }

    return classNamesArray.join(' ');
};