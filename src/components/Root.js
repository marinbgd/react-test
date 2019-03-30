import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import AuthRoot from './AuthRoot'


class Root extends Component {
    render () {
        return <AuthRoot/>
    }
}

export default hot(module)(Root)
