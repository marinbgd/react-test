import React from 'react';
import { ToastContainer } from 'react-toastify';
import CloseButton from './NotificationCloseButton';

import styles from './Notification.scss';

class Notification extends React.Component {
    render() {
        return (
            <ToastContainer
                toastClassName={styles['Notification__Card']}
                closeButton={<CloseButton />}
            />
        );
    }
}

export default Notification;
