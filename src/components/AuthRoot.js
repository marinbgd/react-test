import React, { Component } from 'react';
import Header from './Common/Header/Header';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Footer from './Common/Footer/Footer';
import Loadable from 'react-loadable';
import Loader from './Common/Loader/Loader';
import APP_ROUTES from 'Config/appRoutes';
import Notification from "Common/Notification/Notification";


const MockUserName = 'Vladimir';

const HomePage = Loadable.Map( {
    loader: {
        HomePage: () => import('./HomePage/HomePage'),
    },
    render( loaded, props ) {
        const HomePage = loaded.HomePage.default;
        return <HomePage {...props} />;
    },
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
                <Header agentName={ MockUserName } />

                <main className="main">
                    <Switch>
                        <Route exact path={APP_ROUTES.HOME} render={ () => <HomePage agentName={ MockUserName } />} />
                        <Route component={NotFoundPage} />
                    </Switch>

                    <Notification />
                </main>

                <Footer/>
            </React.Fragment>
        );
    }
}

export default withRouter( AuthRoot );
