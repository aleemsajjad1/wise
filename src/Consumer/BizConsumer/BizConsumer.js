import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './BizConsumer.scss'
import Profile from '../Profile/Profile'
import Loyalty from '../Loyalty/Loyalty'
import { Link } from 'react-router-dom'
import RedemptionActivity from '../RedemptionActivity/RedemptionActivity';

class Bizconsumer extends Component {
    constructor() {
        super()
        this.state = {
            biz_consumer:null,

        }
    }
    render() {
        const biz_consumer = this.props.location.state.row
        // console.log("hello ",biz_consumer)
        return (
            <div className="pl-4">
                <div className="header-name"><div className="back-btn"><Link to="/admin/consumer" >&#8249;</Link></div><h3 style={{fontWeight:"700"}}>{biz_consumer.name}</h3></div>
                <div className="acc-header">
                    <ul class="nav nav-pills ">
                        <li class="nav-item acc-tab ">
                            <a class="nav-link active" data-toggle="pill" href="#profile-consumer">Profile</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link " data-toggle="pill" href="#loyalty">Loyalty accounts</a>
                        </li>
                        <li class="nav-item acc-tab">
                            <a class="nav-link" data-toggle="pill" href="#redumptionActivity">Redemption activity & rating feedback</a>
                        </li>
                    </ul>

                    <div class="tab-content profile">
                        <div class="tab-pane container active" id="profile-consumer"><Profile biz_consumer={biz_consumer}></Profile></div>
                        <div class="tab-pane container fade" id="loyalty">
                            <Loyalty  biz_consumer={biz_consumer}></Loyalty>
                            </div>
                        <div class="tab-pane container fade" id="redumptionActivity">
                            <RedemptionActivity biz_consumer={biz_consumer}></RedemptionActivity>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Bizconsumer);
