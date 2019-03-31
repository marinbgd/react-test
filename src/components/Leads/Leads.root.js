import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LEADS_ROUTES from './Leads.routes';
import Loadable from 'react-loadable';
import Loader from 'Common/Loader/Loader';

const Leads = Loadable({
    loader: () => import('./Leads'),
    loading: Loader
});

const LeadsRoot = () => (
    <Fragment>
        <Switch>
            <Route path={LEADS_ROUTES.INDEX} component={Leads} />
            <Redirect to={{ pathname: LEADS_ROUTES.INDEX }} />
        </Switch>
    </Fragment>
);

export default LeadsRoot;
