import React, { Component } from 'react';
import './SupportEnquiry.scss'
import DummyMessaging from '../../DummyMessaging';
import { getEnquiry, logOut } from '../../Services/Services';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class SupportEnquiry extends Component {
    constructor() {
        super()
        this.state = {
            // data: DummyMessaging,
            isLoading: true
        }
    }

    componentDidMount() {
        getEnquiry().then((res) => {
            this.setState({
                isLoading: false,
                data: res.data
            })
            console.log("accountttttt data", res)
            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                this.setState({ data: res.data })
            }
        })

    }
    chunk = (str, n) => {
        var ret = [];
        var i;
        var len;

        for (i = 0, len = str.length; i < len; i += n) {
            ret.push(str.substr(i, n))
        }

        return ret
    };

    render() {
        const { data, isLoading } = this.state
        return (
            // <div className="">
            isLoading ? (<Loader className="text-center loader"
                type="Oval"
                color="#323A40"
                height={200}
                width={200}
            />) : (
                    <div className="for-scrolll-query">
                        <div className="row main-div pl-4" >
                            <div className="col-12">
                                <div className="consumer-main-div ">
                                    <h4 className="pl-3" style={{ fontWeight: "700" }}>Support enquiry</h4>
                                    <table class="table table-borderless support-table" id="tbl">
                                        <thead>
                                            <tr>
                                                <th className="pad-head-left">Name</th>
                                                <th className="pad-head-left">Mobile</th>
                                                <th className="pad-head-left">Enquiry content</th>
                                                <th className="pad-head-left">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((row, i) => (
                                                    <tr className="table-color1" key={i} >
                                                        <td style={{ width: "10%" }} className="radius-left tbl-pad">{row.name}</td>
                                                        <td style={{ width: "10%" }} className="tbl-pad">{row.phone_number}</td>
                                                        <td style={{ width: "70%" }} className="tbl-pad">{this.chunk(row.inquiry, 50).join('\n')}</td>
                                                        <td style={{ width: "10%" }} className="radius-right tbl-pad">{row.created_at.split(" ")[0]}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* <div className="col-11"></div> */}
                        </div>
                    </div>
                )
            // </div>
        )
    }
}


export default SupportEnquiry;