import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './UserMenu.scss';


const getMenuOpenedIconClassName = (isOpened) => {
    let cssClasses = styles.Icon;
    if (isOpened) {
        cssClasses += ' ' + styles['Icon--isOpened'];
    } else {
        cssClasses += ' ' + styles['Icon--isClosed'];
    }
    return cssClasses;
};

class UserMenu extends Component {

    state = {
        isMenuOpened: false,
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.clickOutsideHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.clickOutsideHandler);
    }

    clickOutsideHandler = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.closeMenu();
        }
    };

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    buttonClickHandler = () => {
        this.toggleMenu();
    };

    toggleMenu = () => {
        this.setState( state => ({
            isMenuOpened: !state.isMenuOpened,
        }));
    };

    closeMenu = () => {
        this.setState({ isMenuOpened: false });
    };

    render() {
        return (
            <nav className={styles.UserMenu} ref={this.setWrapperRef}>
                <button
                    className={ ['btn btn--link', styles.Button].join(' ') }
                    onClick={this.buttonClickHandler}
                >
                    {this.props.agentName}
                    <span className={getMenuOpenedIconClassName(this.state.isMenuOpened)} >&#62;</span>
                </button>

                {
                    this.state.isMenuOpened &&
                    <ul>
                        <li className={styles.ListItem}>Logout</li>
                    </ul>
                }

            </nav>
        );
    }
}

UserMenu.propTypes = {
    agentName: PropTypes.string.isRequired,
};

UserMenu.defaultProps = {
    agentName: 'agent',
};

export default UserMenu;
