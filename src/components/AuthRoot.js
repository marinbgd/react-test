import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Common/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Footer from './Common/Footer/Footer';
import Loadable from 'react-loadable';
import Loader from './Common/Loader/Loader';
import APP_ROUTES from 'Config/appRoutes';
import RedirectHome from 'Common/Redirect/RedirectHome';
import Notification from "Common/Notification/Notification";


const HomePage = Loadable( {
    loader: () => import('./HomePage/HomePage'),
    loading: Loader,
} );

const LeadsPage = Loadable( {
    loader: () => import('./Leads/Leads'),
    loading: Loader,
} );

const NotFoundPage = Loadable( {
    loader: () => import('./NotFoundPage'),
    loading: Loader,
} );


class AuthRoot extends Component {
    render() {
        return (
            <React.Fragment>
                <Header username={this.props.username}/>

                <main className="main">
                    <Switch>
                        <Route exact path={APP_ROUTES.HOME} render={ () => <HomePage username={this.props.username} />} />
                        <Route exact path={APP_ROUTES.LEADS} component={LeadsPage} />
                        <Route path={APP_ROUTES.LOGIN} component={RedirectHome} />
                        <Route component={NotFoundPage} />
                    </Switch>

                    <Notification />
                </main>

                <Footer/>
            </React.Fragment>
        );
    }
}

AuthRoot.propTypes = {
    username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    username: (state.UserReducer.data && state.UserReducer.data.user && state.UserReducer.data.user.name),
});

export default withRouter( connect( mapStateToProps )( AuthRoot ) );
