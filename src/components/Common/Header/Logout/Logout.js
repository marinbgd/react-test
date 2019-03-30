import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from './Logout.actions';
import styles from './Logout.scss';


class Logout extends Component {

    onLogoutClickHandler = () => {
        this.props.logout();
    };

    render() {
        return (
            <button
                onClick={this.onLogoutClickHandler}
                className={ ['btn btn--link btn--block', styles.Button].join(' ') }
                disabled={this.props.LogoutReducer.isLoading}
            >
                Logout
            </button>
        );
    }
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired,
    LogoutReducer: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
    LogoutReducer: state.LogoutReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
    logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
