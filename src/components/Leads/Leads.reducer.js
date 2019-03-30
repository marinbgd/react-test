import { combineReducers } from 'redux';
import LeadsStatusReducer from './LeadsStatus/LeadsStatus.reducer';
import LeadsDeleteReducer from './LeadsDelete/LeadsDelete.reducer';


const LeadsReducer = combineReducers( {
    LeadsStatusReducer,
    LeadsDeleteReducer,
});

export default LeadsReducer;
