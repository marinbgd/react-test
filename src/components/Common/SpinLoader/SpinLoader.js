import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpinLoader.scss';


const SpinLoader = (props) => {
    return (
        <div
            className={ [ styles.Loader, props.customClass ].join(' ') }
            style={{
                borderRightColor: props.color,
                borderBottomColor: props.color,
                borderLeftColor: props.color,
                borderTopColor: props.colorTwo,
                height: props.height,
                width: props.width,
                borderWidth: props.borderWidth,
            }}
        />
    )
};

SpinLoader.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    color: PropTypes.string,
    colorTwo: PropTypes.string,
    borderWidth: PropTypes.string,
    customClass: PropTypes.string,
};

SpinLoader.defaultProps = {
    height: '50px',
    width: '50px',
    color: '#258F37',
    colorTwo: '#5D6888',
    borderWidth: '5px',
    customClass: '',
};

export default SpinLoader;
