import styles from './LeadCategory.scss';


export const getClassNameForCategory = categoryName => {
    switch (categoryName) {
        case 'won':
            return styles.Won;
        case 'lost':
            return styles.Lost;
        case 'new':
            return styles.New;
        default:
            return ''
    }
};
