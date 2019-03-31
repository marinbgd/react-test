import { LEADS_DELETE_IN_PROGRESS, LEADS_DELETE_SUCCESS, LEADS_DELETE_ERROR } from './LeadsDelete.actionTypes';

const deleteLeadIdFromAPI = leadId => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(leadId);
        }, 2000);
    });
};

export const deleteLeadById = leadId => dispatch => {
    dispatch({ type: LEADS_DELETE_IN_PROGRESS });

    return deleteLeadIdFromAPI(leadId)
        .then(() => {
            dispatch({
                type: LEADS_DELETE_SUCCESS,
                payload: {
                    deletedLeadId: leadId
                }
            });
            return leadId;
        })
        .catch(() => {
            dispatch({
                type: LEADS_DELETE_ERROR
            });
        });
};
