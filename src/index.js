/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import { initializeEnv } from './config/environment.config';
import { ConnectedRouter } from 'react-router-redux';
import Root from './components/Root';
import Provider from 'react-redux/es/components/Provider';
import { initPersistentLogin } from './components/User/User.persistentHelper';
import './styles/styles.scss';


const store = configureStore();

initializeEnv();
initPersistentLogin(store.dispatch).then( () => initReactApp() );

function initReactApp () {
    render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root/>
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );

    if (module.hot) {
        module.hot.accept('./components/Root', () => {
            const NewRoot = require('./components/Root').default;
            render(
                <AppContainer>
                    <ConnectedRouter history={history}>
                        <NewRoot/>
                    </ConnectedRouter>
                </AppContainer>,
                document.getElementById('app')
            );
        });
    }
}


