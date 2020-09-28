import React, { Component } from 'react';
import './Messages.scss';
import { withRouter } from 'react-router';
import * as moment from 'moment'
import { Line, Bar, HorizontalBar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import $ from 'jquery'
import { getMessagesByBizIdByDate, logOut } from '../../Services/Services'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            biz_user: null,
            month: null,
            msgDetail: null,
            year: null,
            messageDetails: true,
            isLoading: false,
            smessages: props.biz_user.messages.simple_messages,
            bdymessage: props.biz_user.messages.birthday_messages,
            biz_id: props.biz_user.id,
        }
    }
    getMessageDetails = (message) => {
        this.setState({ messageDetails: false })
        this.setState({ msgDetail: message })
    }
    componentDidMount() {

        var month = new Date().getMonth() + 1;
        if (month.toString().length < 2) month = "0" + month;
        var year = new Date().getFullYear();

        this.setState({ month: month, year: year })
    }

    handleChange = (biz_id) => {
        this.setState({ isLoading: true })

        const months = document.getElementById("month").value;
        const years = document.getElementById("year").value;

        const date = years + "-" + months

        getMessagesByBizIdByDate(date.toString(), biz_id.toString()).then((res) => {

            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                this.setState({
                    smessages: res.data.simple_messages,
                    bdymessage: res.data.birthday_messages,
                })
                this.setState({ isLoading: false })
            }
        })

    };
    pretior = (i, max) => {
        i = i.toString()
        const o = (i.length > max) ? i.substr(0, max) + "..." : i;
        return o;
    }
    backTomessages = () => {
        this.setState({ messageDetails: true });
    }
    render() {
        // const smessages = this.props.biz_user.messages.simple_messages
        // const bdymessage = this.props.biz_user.messages.birthday_messages
        const { biz_id, messageDetails, msgDetail, smessages, bdymessage, isLoading } = this.state

        return (
            // <div>
            messageDetails ? (<div className="container-fluid" style={{ paddingTop: "5%" }}>
                <div className="row pl-3">
                    <div className="col-12">
                        <span style={{ textAlign: "center" }}>
                            <select id="month" className="message-label-background" onChange={() => this.handleChange(biz_id)}  >
                                <option value="01" selected={this.state.month == "01"}>January</option>
                                <option value="02" selected={this.state.month == "02"}>Febuary</option>
                                <option value="03" selected={this.state.month == "03"}>March</option>
                                <option value="04" selected={this.state.month == "04"}>April</option>
                                <option value="05" selected={this.state.month == "05"}>May</option>
                                <option value="06" selected={this.state.month == "06"}>June</option>
                                <option value="07" selected={this.state.month == "07"}>July</option>
                                <option value="08" selected={this.state.month == "08"}>August</option>
                                <option value="09" selected={this.state.month == "09"}>September</option>
                                <option value="10" selected={this.state.month == "10"}>October</option>
                                <option value="11" selected={this.state.month == "11"}>November</option>
                                <option value="12" selected={this.state.month == "12"}>December</option>
                            </select>
                        </span>
                        <span>
                            <select id="year" className="message-label-background" onChange={() => this.handleChange(biz_id)}>
                                <option value="2020" selected={this.state.year == "2020"}>2020</option>
                                <option value="2021" selected={this.state.year == "2021"}>2021</option>
                                <option value="2022" selected={this.state.year == "2022"}>2022</option>
                                <option value="2023" selected={this.state.year == "2023"}>2023</option>
                                <option value="2024" selected={this.state.year == "2024"}>2024</option>
                                <option value="2024" selected={this.state.year == "2025"}>2024</option>
                                <option value="2026" selected={this.state.year == "2026"}>2026</option>
                                <option value="2027" selected={this.state.year == "2027"}>2027</option>
                                <option value="2028" selected={this.state.year == "2028"}>2028</option>
                                <option value="2029" selected={this.state.year == "2029"}>2029</option>
                                <option value="2030" selected={this.state.year == "2030"}>2030</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className="row pl-4 mt-5">
                    <div className="col-6 message-p pl-4"><p>Messaging</p></div>
                    {/* <div className="col-1"></div> */}
                    <div className="col-6 message-p pl-5"><p>Birthday month auto-message</p></div>
                </div>
                {
                    isLoading ? (<Loader className="text-center loader"
                        type="Oval"
                        color="#323A40"
                        height={200}
                        width={200}
                    />) : (
                            <div className="row left-pad-mesg">
                                <div className="col-6">
                                    {
                                        smessages.map((message) => (
                                            <div className="row bg-msg-color msg-even-odd-bg pt-1" onClick={() => this.getMessageDetails(message)}>
                                                <div className="col-9"><p className="msg-head m-0">{this.pretior(message.title, 30)}</p><p className="msg-head-p">{this.pretior(message.content, 40)}</p></div>
                                                <div className="col-3"><p className="msg-head m-0 pl-4" style={{ color: "#5E5F61" }}>sent</p><p className="msg-head-p ">{message.created_at.split("", 10)}</p></div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="col-6 pl-5">
                                    {(bdymessage == null) ? "" : (<div className="row bg-msg-color msg-even-odd-bg pt-1" onClick={() => this.getMessageDetails(bdymessage)}>
                                        <div className="col-9"><p className="msg-head m-0">{this.pretior(bdymessage.title, 30)}</p><p className="msg-head-p">{this.pretior(bdymessage.content, 40)}</p></div>
                                        <div className="col-3"><p className="msg-head m-0 pl-3" style={{ color: "#5E5F61" }}>saved</p><p className="msg-head-p">{bdymessage.created_at.split("", 10)}</p></div>
                                    </div>)}

                                </div>
                            </div>
                        )
                }

            </div>) : (
                    <div className="col-6 pl-3 mt-5">
                        {
                            <div>
                                <div className="row" >
                                    <div className="col-1 back-arrow"><div onClick={this.backTomessages} className="back-btn-customer">&#8249;</div></div>
                                    <div className="col-11 pl-0" style={{ fontWeight: "bold" }}>{msgDetail.title}</div>
                                </div>
                                <div className="row" style={{ width: "600px", paddingTop: "4%", paddingLeft: "9%" }}>
                                    <div className="col-12 msg-content pl-0">{msgDetail.content}</div>
                                </div>
                                {msgDetail.hasOwnProperty("facebook_link") ? (
                                    <p className="pl-4 pt-5" style={{ fontWeight: "bold" }}>Send Report</p>
                                ) : (<div></div>)}
                                {msgDetail.hasOwnProperty("facebook_link") ? (
                                    <div className="col-12 pl-3 mr-0">

                                        <HorizontalBar
                                            data={{
                                                labels: ['Read', 'Sent'],
                                                datasets: [
                                                    {
                                                        backgroundColor: '#F07321',
                                                        barPercentage: 0.6,
                                                        data: [msgDetail.read_messages, msgDetail.total_customer_base]
                                                    }
                                                ],
                                            }}
                                            width={800}
                                            height={180}
                                            options={{
                                                plugins: {
                                                    datalabels: {
                                                        color: '#898989',
                                                        anchor: "end",
                                                        align: "end",
                                                    },
                                                },
                                                responsive: true,
                                                legend: {
                                                    display: false,
                                                },
                                                tooltips: {
                                                    enabled: false,
                                                },
                                                scales: {
                                                    xAxes: [{

                                                        display: false,
                                                        gridLines: {
                                                            display: false
                                                        },
                                                        ticks: {
                                                            beginAtZero: true,
                                                            min: 0,
                                                            max: msgDetail.total_customer_base + 1
                                                        }
                                                    }],
                                                    yAxes: [{
                                                        borderWidth: 40,
                                                        gridLines: {
                                                            display: false
                                                        },
                                                        ticks: {
                                                            // beginAtZero: true,
                                                            // min: 0,
                                                        }
                                                    }],
                                                },
                                            }}
                                        />
                                    </div>) : (<div></div>)}
                            </div>
                        }
                    </div>
                )
            // </div>
        )
    }
}

export default withRouter(Messages);