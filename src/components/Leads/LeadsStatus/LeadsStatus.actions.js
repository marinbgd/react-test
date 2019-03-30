import {
    FETCH_LEADS_IN_PROGRESS,
    FETCH_LEADS_SUCCESS,
    FETCH_LEADS_ERROR,
} from './LeadsStatus.actionTypes';
import _filter from 'lodash/filter';
import { COMPANY_LEADS_MOCK, PERSON_LEADS_MOCK } from '../../../mock/leads.mock';


const ALL_LEADS = [...PERSON_LEADS_MOCK, ...COMPANY_LEADS_MOCK];

const fetchLeadsFromAPI = ({type}) => {
    if (!type) {
        return Promise.resolve(ALL_LEADS);
    }
    const typedLeads = _filter(ALL_LEADS, {type: type});
    return Promise.resolve(typedLeads);
};

export const getLeads = ({type}) => dispatch => {
    dispatch({type: FETCH_LEADS_IN_PROGRESS});

    return fetchLeadsFromAPI({type})
        .then(leads => {
            dispatch({
                type: FETCH_LEADS_SUCCESS,
                payload: {
                    leads
                }
            });
            return leads;
        })
        .catch(() => {
            dispatch({
                type: FETCH_LEADS_ERROR
            });
        });
};
