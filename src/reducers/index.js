import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers( {
    routing: routerReducer,
} );

export default function ( state, action ) {
    return rootReducer( state, action );
}
