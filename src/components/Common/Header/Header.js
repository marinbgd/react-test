import React from 'react'
import PropTypes from 'prop-types'
import UserMenu from 'Common/Header/UserMenu/UserMenu'
import styles from './Header.scss'


const Header = ({username}) => {

    return (
        <header className={styles.Header}>

            <div className="wrapper position-relative">

                <aside className={styles.UserMenuHolder}>
                    <UserMenu username={username}/>
                </aside>

                <h1 className={styles.Title}>Home</h1>
            </div>
        </header>
    )
}

Header.propTypes = {
    username: PropTypes.string.isRequired
}

export default Header
