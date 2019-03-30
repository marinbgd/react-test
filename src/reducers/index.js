import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { LOGOUT_SUCCESS } from 'Common/Header/Logout/Logout.actionTypes';
import { clearPersistentLoginData } from '../components/User/User.persistentHelper';
import UserReducer from '../components/User/User.reducer';
import LogoutReducer from 'Common/Header/Logout/Logout.reducer';


const rootReducer = combineReducers( {
    UserReducer,
    LogoutReducer,
    routing: routerReducer,
} );

export default function ( state, action ) { // reset all reducers on Logout event
    if ( action.type === LOGOUT_SUCCESS ) {
        clearPersistentLoginData();
        state = undefined;
    }
    return rootReducer( state, action );
}
