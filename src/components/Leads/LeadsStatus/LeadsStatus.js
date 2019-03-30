import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLeads } from './LeadsStatus.actions';
import { deleteLeadById } from '../LeadsDelete/LeadsDelete.actions';
import Loader from 'Common/Loader/Loader';
import NotLoadedWidget from 'Common/NotLoadedWidget/NotLoadedWidget';
import LeadWrapper from './LeadWrapper/LeadWrapper';
import { isUserManager } from '../../User/User.helper';


class LeadsStatus extends Component {

    state = {
        type: this.props.match.params.type,
    };

    componentDidMount () {
        this.props.getLeads({type: this.state.type});
    }

    deleteLead (leadId) {
        this.props.deleteLeadById(leadId);
    }

    render () {
        return (
            <div className="wrapper">
                <h1>Leads Status: <strong>{this.state.type || 'All'}</strong></h1>

                {
                    this.props.isDataLoading &&
                    <Loader/>
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
                            this.props.leads.map((lead) => (
                                <LeadWrapper
                                    key={lead.id}
                                    lead={lead}
                                    isDeleteInProgress={this.props.isLeadDeleteInProgress}
                                    isDeletable={this.props.isUserManager}
                                    deleteCallBack={this.deleteLead.bind(this)}
                                />
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
    deleteLeadById: PropTypes.func.isRequired,

    isDataLoading: PropTypes.bool.isRequired,
    isDataError: PropTypes.bool.isRequired,
    isUserManager: PropTypes.bool.isRequired,
    isLeadDeleteInProgress: PropTypes.bool.isRequired,

    leads: PropTypes.array,
};

const mapStateToProps = state => ({
    isDataLoading: state.LeadsReducer.LeadsStatusReducer.isLoading,
    isDataError: state.LeadsReducer.LeadsStatusReducer.isError,
    leads: state.LeadsReducer.LeadsStatusReducer.data,
    isUserManager: isUserManager(state.UserReducer.data.user.roles),
    isLeadDeleteInProgress: state.LeadsReducer.LeadsDeleteReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getLeads,
    deleteLeadById,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeadsStatus));
