import React, { Component } from 'react';
import './Loyalty.scss';
import { withRouter } from 'react-router';

class Loyalty extends Component {
    constructor() {
        super()
        this.state = {
            biz_consumer: null
        }
    }
    render() {

        const loyalty = this.props.biz_consumer.loyaltiy_accoutns
        console.log('hehheheheheehheehhe',loyalty)

        return (
            <div >
                <div className="container-fluid mt-5">
                    <div className="row" >
                        <div className="col-3 loyalty-tab "><p>Loyalty accounts</p></div>
                        <div className="col-3 loyalty-tab "><p></p></div>
                    </div>
                    {
                        loyalty.map((loyal, i) => (
                            <div className="row">
                                <div className="col-3 loyalty-data"><p>{loyal.name}</p></div>
                                <div className="col-3 loyalty-data"><p>{loyal.points} Points</p></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(Loyalty);