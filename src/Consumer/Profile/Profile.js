import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import QrCode from 'qrcode.react'
import './Profile.scss'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            biz_consumer: null
        }
    }
    render() {
        const {biz_consumer} = this.props
        // console.log("profile component" , this.props)
        return (
            <div>
                <div className="container-fluid">
                    {/* <div className="row heading-size">
                        <div className="col-2"><p>Name</p><span>{biz_consumer.name}</span></div>
                        <div className="col-2"><p>Gender</p><span>{biz_consumer.gender}</span></div>
                        <div className="col-2"><p>Age</p><span>{biz_consumer.age}</span></div>
                        <div className="col-2"><p>Race</p><span>{biz_consumer.race}</span></div>
                        <div className="col-2"><p>Mobile</p><span>{biz_consumer.mobile}</span></div>
                        <div className="col-2"><p>Total Points</p><span>{biz_consumer.total_points}</span></div>
                    </div>
                    <div className="row heading-size">
                        <div className="col-3"><p>Terms of Uses</p><span>{biz_consumer.term_of_use}</span></div>
                        <div className="col-2"><p>Notification</p><span>{biz_consumer.notification}</span></div>
                        <div className="col-3"><p>Last active</p><span>{biz_consumer.last_active}</span></div>
                    </div> */}
                    <div className="row">
                        <div className="col-12 pt-5">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Gender</th>
                                        <th>Age</th>
                                        <th>Race</th>
                                        <th>Mobile</th>
                                        <th>Total points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{backgroundColor:"white"}}>
                                        <td style={{width:"22%"}} className="td-size">{biz_consumer.name}</td>
                                        <td style={{width:"16%"}} className="td-size">{biz_consumer.gender}</td>
                                        <td style={{width:"13%"}} className="td-size">{biz_consumer.age}</td>
                                        <td style={{width:"15%"}} className="td-size">{biz_consumer.race}</td>
                                        <td style={{width:"20%"}} className="td-size">{biz_consumer.mobile}</td>
                                        <td style={{width:"16%"}} className="td-size">{biz_consumer.total_points}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table table-borderless" id="tbl">
                                <thead>
                                    <tr>
                                        <th>Terms of Uses</th>
                                        <th>Notification</th>
                                        <th>Last active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{backgroundColor:"white"}}>
                                        <td style={{width:"22%"}} className="td-size">{biz_consumer.term_of_use}</td>
                                        <td style={{width:"16%"}} className="td-size">{biz_consumer.notification}</td>
                                        <td className="td-size">{biz_consumer.last_active}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);