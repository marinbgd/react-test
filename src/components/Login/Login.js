import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import LoginForm from './LoginForm/LoginForm';
import { login } from '../User/User.actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
    loginSubmitCallback = (username, password) => {
        this.props.login(username, password);
    };

    render() {
        return (
            <section className={styles.FormWrapper}>
                <LoginForm
                    submitCallback={this.loginSubmitCallback}
                    isError={this.props.UserReducer.isError}
                    isLoading={this.props.UserReducer.isLoading}
                    errorMessage={this.props.UserReducer.errorMessage}
                />
            </section>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    UserReducer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    UserReducer: state.UserReducer
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            login
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
