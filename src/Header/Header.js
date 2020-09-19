import React, { Component } from 'react'
import './Header.scss'
import SideNav from '../SideNav/SideNav';
import { isAuthenticate } from '../Services/Services'
import { Redirect } from 'react-router';


class Header extends Component {
    render() {
        return (isAuthenticate()) ? (
            <div>
                <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div className="w3-container empty-div"></div>
                </nav>
                <div className="container-fluid page-body-wrapper pad-0 mrg-0">
                    <div className="row">
                        <div className="col-lg-2 col-md-12 col-sm-12 pr-0 "><SideNav></SideNav></div>
                        <div className="col-lg-10 col-md-12 col-sm-12 pad-0 mrg-0 main-div"><div className="main-panel">{this.props.children}</div></div>
                    </div>
                </div>
            </div>
        ) : (<Redirect to="/"></Redirect>)
    }
}

export default Header;