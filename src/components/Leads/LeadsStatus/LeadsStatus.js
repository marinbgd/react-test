import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLeads } from './LeadsStatus.actions';
import Loader from 'Common/Loader/Loader';
import NotLoadedWidget from 'Common/NotLoadedWidget/NotLoadedWidget';
import LeadWrapper from '../LeadWrapper/LeadWrapper';


class LeadsStatus extends Component {

    state = {
        type: this.props.match.params.type
    };

    componentDidMount() {
        this.props.getLeads({ type: this.state.type });
    }

    render () {
        return (
            <div className="wrapper">
                <h1>Leads Status: <strong>{this.state.type || 'All'}</strong></h1>

                {
                    this.props.isDataLoading &&
                    <Loader />
                }

                {
                    this.props.isDataError &&
                    <NotLoadedWidget history={this.props.history}/>
                }

                {
                    Array.isArray(this.props.leads) &&
                    this.props.leads.length &&
                    <div>
                        {
                            this.props.leads.map( (lead) => (
                                <LeadWrapper key={lead.id} lead={lead} />
                            ))
                        }
                    </div>
                }
            </div>
        );
    }
}

LeadsStatus.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }),
    getLeads: PropTypes.func.isRequired,
    isDataLoading: PropTypes.bool.isRequired,
    isDataError: PropTypes.bool.isRequired,
    leads: PropTypes.array,
};

const mapStateToProps = state => ({
    isDataLoading: state.LeadsReducer.LeadsStatusReducer.isLoading,
    isDataError: state.LeadsReducer.LeadsStatusReducer.isError,
    leads: state.LeadsReducer.LeadsStatusReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators( {
    getLeads,
}, dispatch );

export default connect( mapStateToProps, mapDispatchToProps )( withRouter(LeadsStatus) );
