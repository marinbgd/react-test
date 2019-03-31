import { LOGOUT_IN_PROGRESS, LOGOUT_SUCCESS, LOGOUT_ERROR } from './Logout.actionTypes';

const INIT_STATE = {
    isLoading: null,
    isError: null,
    errorMessage: null
};

const LogoutReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGOUT_IN_PROGRESS:
            return {
                ...state,
                isLoading: true
            };

        case LOGOUT_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.error
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                errorMessage: null
            };

        default:
            return state;
    }
};

export default LogoutReducer;
