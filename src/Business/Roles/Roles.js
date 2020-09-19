import React, { Component } from 'react';
import './Roles.scss';
import { withRouter } from 'react-router';

class Roles extends Component {
    constructor() {
        super()
        this.state = {
            biz_user: null
        }
    }
    render() {
        // const { biz_user } = this.props
        const roles = this.props.biz_user.roles

        return (
            <div>
                <div className="container-fluid" style={{paddingTop:"5%"}}>
                    <div className="row">
                        <div className="col-2 roles"><p>Name</p></div>
                        <div className="col-3 roles"><p>Email</p></div>
                        <div className="col-3 roles"><p>Password</p></div>
                        <div className="col-4 roles"><p>Access</p></div>
                    </div>
                    {
                        roles.map((role) => (
                            <div className="row mb-4">
                                <div className="col-2 roles-p"><p>{role.name}</p></div>
                                <div className="col-3 roles-p"><p>{role.email}</p></div><br />
                                <div className="col-3 roles-p"><p>{role.password.substring(0, 15)}</p></div>
                                <div className="col-4 roles-p">
                                    { role.points == 1 && <p className="roles-clr">Points & Rewards Verification</p>}
                                    { role.loyalty == 1 && <p className="roles-clr">Manage Loyalty</p>}
                                    { role.customer_base == 1 && <p className="roles-clr">Customer Base</p>}
                                    { role.redemption == 1 && <p className="roles-clr">Redemption Activity</p>}
                                    { role.messaging == 1 && <p className="roles-clr">Customer Messaging</p>}
                                </div>
                                {/* <div className="col-4 roles-p"> {role.access.map((access) => (<p className="roles-clr">{access}</p>))} </div> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Roles);








