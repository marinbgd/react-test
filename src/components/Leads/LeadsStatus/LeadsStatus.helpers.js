import _filter from 'lodash/filter';

export const removeLeadFromLeadsById = (leads = [], leadId) => {
    return _filter(leads, lead => lead.id !== leadId);
};
