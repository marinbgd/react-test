import download from 'download';
import CONFIG from '../src/config/config';


download(CONFIG.TRANSLATIONS.CROWDIN_URLS.HOMEPAGE, 'src/translations/sr-CS');
