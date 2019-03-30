const TRANSLATION_URL_MAP = {
    'users': 'HEADER.USERS',
    'KYC': 'HEADER.KYC',
    'mail': 'HEADER.MAIL',
    '/': 'HEADER.HOME',
};

export const getTitleFromLocation = (pathname, translate) => {
    let foundTitle;
    const urls = Object.keys(TRANSLATION_URL_MAP);
    for (let i = 0, length = urls.length; i < length; i += 1) {
        let url = urls[i];
        if ( ~pathname.indexOf(url) ) {
            foundTitle = translate(TRANSLATION_URL_MAP[url]);
            break;
        }
    }
    return foundTitle;
};
