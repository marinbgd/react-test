import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.scss';
import SpinLoader from 'Common/SpinLoader/SpinLoader';
import Button from 'Common/Button/Button';
import { Form, Text } from 'informed';
import { usernameValidation } from 'Util/formValidation';
import ErrorWidget from 'Common/Error/ErrorWidget';

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = (event, inputFieldName) => {
        this.setState({
            [inputFieldName]: event.currentTarget.value.trim()
        });
    };

    submitHandler = () => {
        this.props.submitCallback(this.state.username, this.state.password);
    };

    render() {
        return (
            <Form className={styles.Form} onSubmit={this.submitHandler}>
                {({ formState }) => (
                    <div>
                        <h1 className={styles.Title}>Hello,</h1>
                        <h1 className={styles.Subtitle}>Please login</h1>

                        <aside className={styles.Notification}>
                            To login as <strong>manager</strong> use <strong>Dorotej</strong> username
                            <br />
                            To login as <strong>user</strong> use <strong>Branko</strong> username
                            <br />
                            Password can be left as empty
                        </aside>

                        <label className={styles.FormRow}>
                            <Text
                                field={'username'}
                                className={styles.FormRowInput}
                                type="text"
                                placeholder="Enter username"
                                value={this.state.username}
                                onChange={event => this.inputChangeHandler(event, 'username')}
                                validateOnChange
                                validate={usernameValidation}
                            />
                            {formState.errors.username && <ErrorWidget errorMessage={formState.errors.username} />}
                        </label>

                        <label className={styles.FormRow}>
                            <Text
                                field={'password'}
                                className={styles.FormRowInput}
                                type="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={event => this.inputChangeHandler(event, 'password')}
                            />
                        </label>

                        {(this.props.isLoading && (
                            <label className={styles.FormRowSubmit}>
                                <SpinLoader />
                            </label>
                        )) || <Button buttonStyles={styles.SubmitBtn} label="Log in" type="submit" />}

                        {this.props.isError && <div className={styles.Error}>{this.props.errorMessage}</div>}
                    </div>
                )}
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submitCallback: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string
};

LoginForm.defaultProps = {
    errorMessage: 'Error.'
};

export default LoginForm;
