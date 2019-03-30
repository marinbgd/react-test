import localStorageWrapper from 'Util/localStorageWrapper';
import { HOUR_IN_MS } from 'Util/time.constants';
import { loginWithToken } from './User.actions';


const LOCAL_STORAGE_USER_DATA_KEY = 'react-test_user_data';

export const persistLoginData = ({access_token}) => {
    localStorageWrapper.setItem(LOCAL_STORAGE_USER_DATA_KEY, {access_token}, HOUR_IN_MS);
};

export const getPersistentLoginData = () => localStorageWrapper.getItem(LOCAL_STORAGE_USER_DATA_KEY);

export const clearPersistentLoginData = () => {
    localStorageWrapper.removeItem(LOCAL_STORAGE_USER_DATA_KEY);
};

export const initPersistentLogin = (dispatch) => {
    const persistentUserData = getPersistentLoginData();
    if (!persistentUserData) { return Promise.resolve(); }

    return loginWithToken(dispatch, persistentUserData.access_token);
};

export const getAccessToken = () => {
    const persistentUserData = getPersistentLoginData();
    if (persistentUserData && persistentUserData.access_token) {
        return persistentUserData.access_token;
    }
    return null;
};
