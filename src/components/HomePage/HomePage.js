import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Hello, {this.props.username}</h1>
                <h2>Welcome</h2>
            </div>
        );
    }
}

HomePage.propTypes = {
    username: PropTypes.string
};

export default HomePage;
