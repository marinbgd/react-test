import React from 'react'
import PropTypes from 'prop-types'
import UserMenu from 'Common/Header/UserMenu/UserMenu'
import styles from './Header.scss'


const Header = ({agentName}) => {

    return (
        <header className={styles.Header}>

            <div className="wrapper position-relative">

                <aside className={styles.UserMenuHolder}>
                    <UserMenu agentName={agentName}/>
                </aside>

                <h1 className={styles.Title}>Home</h1>
            </div>
        </header>
    )
}

Header.propTypes = {
    agentName: PropTypes.string.isRequired
}

export default Header
