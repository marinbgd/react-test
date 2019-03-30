import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';


class LeadsStatus extends Component {

    state = {
        type: this.props.match.params.type
    };

    render () {
        return (
            <div className="wrapper">
                <h1>Leads Status</h1>
                <h2>Type: {this.state.type || 'All'}</h2>
            </div>
        );
    }
}

LeadsStatus.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }),
};

export default withRouter(LeadsStatus);
