import _filter from 'lodash/filter';


export const leadsSelector = (leads = [], type) => {
    console.log(type)
    if (!type) {
        return leads;
    }
    return _filter(leads, { type: type });
};