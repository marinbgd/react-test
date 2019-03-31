import React from 'react';
import { Redirect } from 'react-router-dom';
import APP_ROUTES from 'Config/appRoutes';

const RedirectHome = () => {
    return <Redirect to={{ pathname: APP_ROUTES.HOME }} />;
};

export default RedirectHome;
