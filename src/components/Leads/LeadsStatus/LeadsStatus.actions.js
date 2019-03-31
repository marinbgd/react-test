import { FETCH_LEADS_IN_PROGRESS, FETCH_LEADS_SUCCESS, FETCH_LEADS_ERROR } from './LeadsStatus.actionTypes';
import _filter from 'lodash/filter';
import { COMPANY_LEADS_MOCK, PERSON_LEADS_MOCK } from '../../../mock/leads.mock';

const ALL_LEADS = [...PERSON_LEADS_MOCK, ...COMPANY_LEADS_MOCK];

const fetchLeadsFromAPI = ({ type, category }) => {
    let filteredLeads = [...ALL_LEADS];

    if (type && type !== 'all') {
        // ignore 'all' for filtering types
        filteredLeads = _filter(filteredLeads, { type });
    }

    if (category) {
        filteredLeads = _filter(filteredLeads, { category });
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(filteredLeads);
        }, 500);
    });
};

export const getLeads = ({ type, category }) => dispatch => {
    dispatch({ type: FETCH_LEADS_IN_PROGRESS });

    return fetchLeadsFromAPI({ type, category })
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
