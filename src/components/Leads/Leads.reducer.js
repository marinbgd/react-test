import { combineReducers } from 'redux';
import LeadsStatusReducer from './LeadsStatus/LeadsStatus.reducer';


const LeadsReducer = combineReducers( {
    LeadsStatusReducer,
});

export default LeadsReducer;
