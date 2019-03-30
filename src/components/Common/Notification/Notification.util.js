import { toast } from 'react-toastify';
import { SECOND_5_IN_MS } from 'Util/time.constants';

const DEFAULT_DURATION = SECOND_5_IN_MS;


export const notify = ( { text, type = 'info', duration = DEFAULT_DURATION, pauseOnBrowserTabChange = true } ) => {
    toast( text, {
        type,
        autoClose: duration,
        pauseOnFocusLoss: pauseOnBrowserTabChange
    } );
};
