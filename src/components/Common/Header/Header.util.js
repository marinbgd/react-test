const URL_TO_NAME_MAP = {
    leads: 'Leads',
    about: 'About',
    '/': 'Home'
};

export const getTitleFromLocation = pathname => {
    let foundTitle;
    const urls = Object.keys(URL_TO_NAME_MAP);
    for (let i = 0, length = urls.length; i < length; i += 1) {
        let url = urls[i];
        if (~pathname.indexOf(url)) {
            foundTitle = URL_TO_NAME_MAP[url];
            break;
        }
    }
    return foundTitle;
};
