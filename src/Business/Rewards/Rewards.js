import React, { Component } from 'react';
import './Rewards.scss';
import { withRouter } from 'react-router';

class Rewards extends Component {
    constructor() {
        super()
        this.state = {
            biz_user: null
        }
    }
    render() {

        const rewards = this.props.biz_user.rewards.simple_rewards
        const bdyrewards = this.props.biz_user.rewards.birthday_rewards
        return (
            <div>
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-3 reward-size"><p>Rewards</p></div>
                        <div className="col-3 reward-size"><p>Points required</p></div>
                        <div className="col-6 reward-size"><p>Terms</p></div>
                    </div>
                    {
                        rewards.map((reward, i) => (
                            <div className="row" key={i}>
                                <div className="col-3 reward-p"><p>{reward.title}</p></div>
                                <div className="col-3 reward-p"><p>{reward.points} Points</p></div>
                                <div className="col-6 reward-p"><p> {reward.terms}</p></div>
                            </div>
                        ))
                    }
                    <div className="row mt-5">
                        <div className="col-3 reward-size"><p>Birthdat reward</p></div>
                        <div className="col-9 reward-size"><p>Terms</p></div>
                    </div>
                    {
                        bdyrewards.map((birthday, i) => (
                            <div className="row" key={i}>
                                <div className="col-3 reward-p"><p>{birthday.title}</p></div>
                                <div className="col-9 reward-p"> <p>{birthday.terms}</p></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Rewards);