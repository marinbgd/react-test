import {
    USER_LOGIN_IN_PROGRESS,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR,
    USER_AUTO_LOGIN_ERROR,
    USER_AUTO_LOGIN_SUCCESS,
} from './User.actionTypes';


const INIT_STATE = {
    isLoading: null,
    isError: null,
    errorMessage: null,
    data: null,
};

export default function UserReducer (state = INIT_STATE, action) {
    switch (action.type) {

        case USER_LOGIN_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            };

        case USER_LOGIN_SUCCESS:
        case USER_AUTO_LOGIN_SUCCESS:   // intentional fall-through
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: {
                    user: action.payload.loadedUserData,
                },
            };

        case USER_LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                data: null,
                errorMessage: action.error,
            };

        case USER_AUTO_LOGIN_ERROR:
            return { ...INIT_STATE };

        default:
            return state;
    }
}
