import {
    LEADS_DELETE_IN_PROGRESS,
    LEADS_DELETE_SUCCESS,
    LEADS_DELETE_ERROR,
} from './LeadsDelete.actionTypes';


const INIT_STATE = {
    isLoading: false,
    isError: false,
    data: null,
};

export default function LeadsDeleteReducer (state = INIT_STATE, action) {
    switch (action.type) {

        case LEADS_DELETE_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            };

        case LEADS_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.deletedLeadId,
            };

        case LEADS_DELETE_ERROR:
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
