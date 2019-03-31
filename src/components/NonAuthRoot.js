import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from 'Common/Loader/Loader';
import Header from 'Common/NonAuthHeader/NonAuthHeader';
import Footer from 'Common/Footer/Footer';
import APP_ROUTES from 'Config/appRoutes';
import RedirectLogin from 'Common/Redirect/RedirectLogin';

const Login = Loadable.Map({
    loader: {
        Login: () => import('./Login/Login')
    },
    render(loaded, props) {
        const Login = loaded.Login.default;
        return <Login {...props} />;
    },
    loading: Loader
});

class NonAuthRoot extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />

                <Switch>
                    <Route path={APP_ROUTES.LOGIN} component={Login} />
                    <Route component={RedirectLogin} />
                </Switch>

                <Footer />
            </React.Fragment>
        );
    }
}

export default NonAuthRoot;
