import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';


const Button = props => (
    <button
        type={props.type}
        className={`${styles[ 'Button' ]} ${props.buttonStyles}`}
        onClick={props.onButtonClick}
        disabled={props.disabled}
    >
        {
            props.label &&
            <span className={styles[ 'Button-label' ]}>{props.label}</span>
        }
        {
            props.icon &&
            <i className={`${styles[ 'Button__icon' ]} ${props.iconStyles} material-icons`}>{props.icon}</i>
        }
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    buttonStyles: PropTypes.string,
    onButtonClick: PropTypes.func,
    label: PropTypes.string,
    icon: PropTypes.string,
    iconStyles: PropTypes.string,
    disabled: PropTypes.bool
};

export default Button;
