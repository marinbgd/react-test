import React, { Component, Fragment } from 'react';
import PageTopSelector from './LeadsStatus/PageTopSelector/PageTopSelector';
import LeadStatus from './LeadsStatus/LeadsStatus';
import LEADS_ROUTES from './Leads.routes';
import { Route } from 'react-router-dom';

class Leads extends Component {
    render() {
        return (
            <Fragment>
                <PageTopSelector />
                <div className="wrapper position-relative">
                    <h1>Leads</h1>

                    <p>This is the Leads page.</p>
                    <p>Please use the links inside the blue header to start.</p>

                    {/* key will ensure rendering new component when type changes */}
                    <Route
                        path={LEADS_ROUTES.TYPES.INDEX + '/:type?/:category?'}
                        render={({ match }) => <LeadStatus key={match.params.type + match.params.category} />}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Leads;
