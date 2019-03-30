import {
    LOGOUT_IN_PROGRESS,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
} from './Logout.actionTypes';
import { push } from 'react-router-redux';
import APP_ROUTES from 'Config/appRoutes';


export const logout = () => dispatch => {
    dispatch( { type: LOGOUT_IN_PROGRESS } );

    return Promise.resolve() // mocking API async call
        .then( () => {
            dispatch( { type: LOGOUT_SUCCESS } );
            dispatch( push( APP_ROUTES.LOGIN ) );
        } )
        .catch( error => {
            dispatch( { type: LOGOUT_ERROR, error: error.response } );
        } );

};
