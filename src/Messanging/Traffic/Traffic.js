import React, { Component } from 'react';
import './Traffic.scss'
import { withRouter } from 'react-router';
import { getMessageTrafficByDate, logOut } from '../../Services/Services'
import DummyTraffic from '../../DummyTraffic'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import $ from 'jquery'

class Traffic extends Component {
    constructor() {
        super()
        this.state = {
            data: DummyTraffic,
            day: null,
            month: null,
            year: null,
            loading: false,
            isloading: true
        }

    }

    componentDidMount() {

        var day = new Date().getDate();
        if (day.toString().length < 2) day = "0" + day;
        var month = new Date().getMonth() + 1;
        if (month.toString().length < 2) month = "0" + month;
        var year = new Date().getFullYear();

        this.setState({ day: day, month: month, year: year })

        const date = year + "-" + month + "-" + day

        getMessageTrafficByDate(date.toString()).then((res) => {
            this.setState({
                isloading: true,
            })

            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                console.log("calling traffic date api", res.data)
                this.setState({ data: res.data })
            }

            this.setState({ isloading: false })
        })
    }

    handleChange = () => {

        const days = document.getElementById("days").value;
        const months = document.getElementById("months").value;
        const years = document.getElementById("years").value;

        const date = years + "-" + months + "-" + days
        this.setState({
            loading: true,
        })

        getMessageTrafficByDate(date.toString()).then((res) => {
            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                console.log("calling traffic date api", res.data)
                this.setState({ data: res.data })
                this.setState({ loading: false })
            }

        })
    };
    render() {
        const { data, loading, isloading } = this.state


        return (
            isloading ? (<Loader className="text-center loader"
                type="Oval"
                color="#323A40"
                height={200}
                width={200}
            />) : (
                    <div className="row pl-4" style={{ width: "97%" }}>
                        <div className="col-12">
                            <div className="main-div">
                                <div className="bill-main-div">
                                    <div className="row">
                                        <div className="trafic-header-text col-5">
                                            <h4 style={{ fontWeight: "bold" }}>Business messaging traffic</h4>
                                        </div>
                                        <div className="col-7 taric-for-query">
                                            <span >
                                                <select className="select" id="days" className="traffic-label-background" onChange={this.handleChange} >
                                                    <option value="01" selected={this.state.day == "01"}>01</option>
                                                    <option value="02" selected={this.state.day == "02"}>02</option>
                                                    <option value="03" selected={this.state.day == "03"}>03</option>
                                                    <option value="04" selected={this.state.day == "04"}>04</option>
                                                    <option value="05" selected={this.state.day == "05"}>05</option>
                                                    <option value="06" selected={this.state.day == "06"}>06</option>
                                                    <option value="07" selected={this.state.day == "07"}>07</option>
                                                    <option value="08" selected={this.state.day == "08"}>08</option>
                                                    <option value="09" selected={this.state.day == "09"}>09</option>
                                                    <option value="10" selected={this.state.day == "10"}>10</option>
                                                    <option value="11" selected={this.state.day == "11"}>11</option>
                                                    <option value="12" selected={this.state.day == "12"}>12</option>
                                                    <option value="13" selected={this.state.day == "13"}>13</option>
                                                    <option value="14" selected={this.state.day == "14"}>14</option>
                                                    <option value="15" selected={this.state.day == "15"}>15</option>
                                                    <option value="16" selected={this.state.day == "16"}>16</option>
                                                    <option value="17" selected={this.state.day == "17"}>17</option>
                                                    <option value="18" selected={this.state.day == "18"}>18</option>
                                                    <option value="19" selected={this.state.day == "19"}>19</option>
                                                    <option value="20" selected={this.state.day == "20"}>20</option>
                                                    <option value="21" selected={this.state.day == "21"}>21</option>
                                                    <option value="22" selected={this.state.day == "22"}>22</option>
                                                    <option value="23" selected={this.state.day == "23"}>23</option>
                                                    <option value="24" selected={this.state.day == "24"}>24</option>
                                                    <option value="25" selected={this.state.day == "25"}>25</option>
                                                    <option value="26" selected={this.state.day == "26"}>26</option>
                                                    <option value="27" selected={this.state.day == "27"}>27</option>
                                                    <option value="28" selected={this.state.day == "28"}>28</option>
                                                    <option value="29" selected={this.state.day == "29"}>29</option>
                                                    <option value="30" selected={this.state.day == "30"}>30</option>
                                                    <option value="31" selected={this.state.day == "31"}>31</option>
                                                </select>
                                            </span>
                                            <span>
                                                <select className="select" id="months" className="traffic-label-background" onChange={() => this.handleChange} >
                                                    <option value="01" selected={this.state.month == "01"} >January</option>
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
                                                <select id="years" className="traffic-label-background" onChange={this.handleChange} >
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
                                    {
                                        loading ? (<Loader className="text-center loader"
                                            type="Oval"
                                            color="#323A40"
                                            height={200}
                                            width={200}
                                        />) : (
                                                <div className=" mrg-0 pad-0 pt-2">
                                                    <table className="table table-borderless traf-table" >
                                                        <tbody>
                                                            {
                                                                data.map((row, i) => (
                                                                    <tr className="table-color1" key={i} >
                                                                        <td style={{ width: "5%" }} className="radius-left tbl-pad">{row.name}</td>
                                                                        <td style={{ width: "3%" }} className="tbl-pad"><span className="span-color">Essentional Plan</span> </td>
                                                                        <td style={{ width: "2%" }} className="tbl-pad">{row.customer_base_count}</td>
                                                                        <td style={{ width: "18%" }} className="radius-right tbl-pad">{row.title}</td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
        )
    }
}


export default withRouter(Traffic);