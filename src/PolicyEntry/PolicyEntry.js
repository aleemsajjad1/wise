import React, { Component } from 'react';
import './PolicyEntry.scss';
import { withRouter } from 'react-router';
import { getPolicy, updatePolicy } from '../Services/Services'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class PolicyEntry extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: "",
            isloading: false,
            isLoading: true,
            iserror: false,
            errormsg: "",
        }
    }

    componentDidMount() {
        getPolicy().then((res) => {
            this.setState({
                isLoading: false,
                data: res.data

            })
            console.log("policy data", res)
            if (res.message == "Unauthenticated.") {
                // logOut();
            }
            else {
                this.setState({ data: res.data })
            }
        })

    }
    handleChange = () => {
        const toub = document.getElementById("toub").value;
        const tou = document.getElementById("tou").value;
        const pp = document.getElementById("pp").value;
        const ppb = document.getElementById("ppb").value;
        console.log(toub, tou, pp, ppb)


        this.setState({ data: { "term_of_use_biz": toub, "term_of_use": tou, "privacy_policy_biz": ppb, "privacy_policy": pp } });
    }

    updatePolicy = () => {
        this.setState({ isloading: true })

        const toub = document.getElementById("toub").value;
        const tou = document.getElementById("tou").value;
        const pp = document.getElementById("pp").value;
        const ppb = document.getElementById("ppb").value;
        console.log(toub, tou, pp, ppb)

        updatePolicy(toub, tou, ppb, pp).then((result) => {
            let responseJSON = result;
            console.log("policy entry", responseJSON)
            if (responseJSON.error) {
                this.setState({
                    iserror: true,
                    errormsg: responseJSON.message
                })
            }
            else {
                // alert(responseJSON.message)
            }
            this.setState({
                isloading: false
            })
        })


    }
    render() {

        const { isloading, isLoading, errormsg, iserror, data } = this.state

        return (
            isLoading ? (<Loader className="text-center loader"
                type="Oval"
                color="#323A40"
                height={200}
                width={200}
            />) : (
                    <div className="pl-5">
                        <div className="policy-card-outer">

                            <div className="policy-card mb-0">
                                <div class="card card-contant" >
                                    <div class="card-body">
                                        <h5 className="policy-card-h3">Business app</h5>
                                        <p>Terms of use (Wisebiz app)</p>
                                        <textarea className="text-area" id="toub" value={data.term_of_use_biz} onChange={this.handleChange} cols="50" rows="16"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="policy-card  mb-0">
                                <div class="card card-contant" >
                                    <div class="card-body">
                                        <h5 className="policy-card-h3">Consumer app</h5>
                                        <p>Terms of use (Wise app)</p>
                                        <textarea className="text-area" id="tou" value={data.term_of_use} onChange={this.handleChange} cols="50" rows="16"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="policy-card  mb-0">
                                <div class="card card-contant" >
                                    <div class="card-body">

                                        <p>Privacy policy (WiseBiz app)</p>
                                        <textarea className="text-area " id="ppb" value={data.privacy_policy_biz} onChange={this.handleChange} cols="50" rows="16"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="policy-card  mb-0">
                                <div class="card card-contant" >
                                    <div class="card-body">

                                        <p>Privacy policy (Wise app)</p>
                                        <textarea className="text-area" id="pp" value={data.privacy_policy} onChange={this.handleChange} cols="50" rows="16"></textarea>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-6" style={{ paddingLeft: "35px" }}>
                                    {
                                        (iserror) ? (<p className="text-danger">{errormsg}</p>) : ("")
                                    }
                                </div>
                                <div className="col-6">
                                    {/* <button type="button" class="btn btn-primary policy-btn" onClick={this.updatePolicy}>Save All</button> */}
                                    {
                                        (isloading) ? (<Loader className="loaader-align"
                                            type="Oval"
                                            color="#323A40"
                                            height={30}
                                            width={30}
                                        />) : (<button type="button" class="btn btn-primary policy-btn" onClick={this.updatePolicy}>Save all</button>)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                )

        )
    }
}

export default withRouter(PolicyEntry);