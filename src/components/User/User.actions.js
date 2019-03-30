import {
    USER_LOGIN_IN_PROGRESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_AUTO_LOGIN_SUCCESS,
    USER_AUTO_LOGIN_ERROR
} from './User.actionTypes';
import { push } from 'react-router-redux';
import { persistLoginData, clearPersistentLoginData } from './User.persistentHelper';
import APP_ROUTES from 'Config/appRoutes';
import _find from 'lodash/find';
import { USERS as MOCK_USERS } from '../../mock/login.mock';


const loginApi = username => {
    let foundUser = _find(MOCK_USERS, {name: username});
    if (foundUser) {
        return Promise.resolve(foundUser);
    }
    return Promise.reject('Wrong user/pass.');
};

const getUserDataWithToken = access_token => {
    let foundUser = _find(MOCK_USERS, {access_token});
    if (foundUser) {
        return Promise.resolve(foundUser);
    }
    return Promise.reject('Access token expired');
};

export const login = (username, password) => dispatch => {
    dispatch({type: USER_LOGIN_IN_PROGRESS});

    return loginApi(username, password)
        .then(userData => {
            persistLoginData({access_token: userData.access_token});

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: {
                    loadedUserData: userData
                }
            });
        })
        .catch(error => {
            clearPersistentLoginData();

            dispatch({
                type: USER_LOGIN_ERROR,
                error: error
            });
        });
};

export const loginWithToken = (dispatch, access_token) => {
    dispatch({type: USER_LOGIN_IN_PROGRESS});

    return getUserDataWithToken(access_token)
        .then(success => {
            dispatch({
                type: USER_AUTO_LOGIN_SUCCESS,
                payload: {
                    loadedUserData: success,
                }
            });
            return success;
        })
        .catch(error => {
            clearPersistentLoginData();

            dispatch({
                type: USER_AUTO_LOGIN_ERROR,
                error: error
            });

            dispatch(push(APP_ROUTES.LOGIN));
        });
};
