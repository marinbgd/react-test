import {
    FETCH_LEADS_IN_PROGRESS,
    FETCH_LEADS_SUCCESS,
    FETCH_LEADS_ERROR,
} from './LeadsStatus.actionTypes';


const INIT_STATE = {
    isLoading: false,
    isError: false,
    data: null,
};

export default function LeadsStatusReducer (state = INIT_STATE, action) {
    switch (action.type) {

        case FETCH_LEADS_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            };

        case FETCH_LEADS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.leads,
            };

        case FETCH_LEADS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: null,
            };

        default:
            return state;
    }
}
