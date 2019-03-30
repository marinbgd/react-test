import React, { Component, Fragment } from 'react';
import PageTopSelector from './PageTopSelector/PageTopSelector';
import LeadStatus from './LeadsStatus/LeadsStatus';
import LEADS_ROUTES from './Leads.routes';
import { Route } from 'react-router-dom';


class Leads extends Component {
    render () {
        return (
            <Fragment>
                <PageTopSelector />
                <div className="wrapper">
                    <h1>Leads</h1>

                    <Route path={LEADS_ROUTES.TYPES.INDEX + '/:type?'} render={({match}) => (<LeadStatus key={match.params.type} />)}/>
                </div>
            </Fragment>
        );
    }
}

export default Leads;
