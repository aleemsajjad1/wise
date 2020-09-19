import React from 'react';
import { Component } from 'react';
import { logOut } from '../Services/Services'

class Logout extends Component {
    componentDidMount() {
        logOut()
    }
    render() {
        return (
            <div></div>
        )
    }
}
export default Logout