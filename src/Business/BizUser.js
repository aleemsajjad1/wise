import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './BizUser.scss'
import Profile from './Profile/Profile';
import Rewards from './Rewards/Rewards';
import { Link } from 'react-router-dom'
import Roles from './Roles/Roles';
import Messages from './Messages/Messages';
import dummyAccount from '../DummyAccount';
import Redemption from './Redemption/Redemption';
import CustomerBase from './CustomerBase/CustomerBase';

class BizUser extends Component {
    constructor() {
        super()
        this.state = {
            biz_user: null,
            data: null
        }
    }
    render() {
        const biz_user = this.props.location.state.row
        // const biz_dummy = this.state.data
        // console.log("hellloo", biz_dummy)
        return (
            <div className="pl-4 responsive-for-mobile">
                <div className="header-name"><div className="back-btn"><Link to="/admin/business/account" >&#8249;</Link></div><h3 style={{fontWeight:"bold"}}>{biz_user.brand_name}</h3></div>
                <div className="acc-header">
                    <ul class="nav nav-pills ">
                        <li class="nav-item acc-tab ">
                            <a class="nav-link active" data-toggle="pill" href="#profile-component">Profile</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link " data-toggle="pill" href="#rewards">Rewards</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link" data-toggle="pill" href="#customerBase">Customer base</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link" data-toggle="pill" href="#redemption">Redemption</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link" data-toggle="pill" href="#messagess">Messaging</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link" data-toggle="pill" href="#roles">Roles</a>
                        </li>
                    </ul>

                    <div class="tab-content profile">
                        <div class="tab-pane container active" id="profile-component"><Profile biz_user={biz_user} ></Profile></div>
                        <div class="tab-pane container fade" id="rewards"><Rewards biz_user={biz_user}></Rewards></div>
                        <div class="tab-pane container fade" id="customerBase">
                            <CustomerBase biz_user={biz_user}></CustomerBase>
                            </div>
                        <div class="tab-pane container fade" id="redemption">
                            <Redemption biz_user={biz_user}></Redemption>
                            </div>
                        <div class="tab-pane container fade" id="messagess">
                            <Messages biz_user={biz_user}></Messages>
                            </div>
                        <div class="tab-pane container fade" id="roles">
                            <Roles biz_user={biz_user}></Roles>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(BizUser);
