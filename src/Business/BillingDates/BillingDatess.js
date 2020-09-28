import React, { Component } from "react";
import "./BillingDates.scss";
import DummyBilling from "../../DummyBilling";
import { getAllBillingDetails, logOut } from "../../Services/Services";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class BillingDates extends Component {
  constructor() {
    super();
    this.state = {
      data: DummyBilling,
      biz_user: null,
      day: null,
      month: null,
      year: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    var month = new Date().getMonth() + 1;
    if (month.toString().length < 2) month = "0" + month;
    var year = new Date().getFullYear();

    this.setState({ month: month, year: year });
    const date = year + "-" + month;

    getAllBillingDetails(date.toString()).then((res) => {
      if (res.message == "Unauthenticated.") {
        logOut();
      } else {
        console.log("calling billing date api", res.data);
        this.setState({ data: res.data });
        this.setState({ loading: false });
      }
    });
  }

  handleChange = () => {
    // this.setState({ dateloader: true });

    // const months = document.getElementById("month").value;
    // const years = document.getElementById("year").value;

    // const date = years + "-" + months;

  };

  render() {

    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var month = month[d.getMonth()];
    var year = d.getFullYear();

    const { data, loading } = this.state;
    return loading ? (
      <Loader
        className="text-center loader"
        type="Oval"
        color="#323A40"
        height={200}
        width={200}
      />
    ) : (
        <div className="for-scroll-screen">
          <div className="row pl-4" style={{ width: "97%" }}>
            <div className="col-12">
              <div className="main-div">
                <div className="bill-main-div">
                  <div className="row ">
                    <div className="bill-header-text col-4">
                      <h4>Billing dates</h4>
                    </div>
                    <div className="col-8 for-bill-date">
                      <span className="bill-label-background"> {month}

                        {/* <select
                      id="month"
                      className="bill-label-background"
                      onChange={() => this.handleChange}
                    >
                      <option value="01" selected={this.state.month == "01"}>
                        January
                      </option>
                      <option value="02" selected={this.state.month == "02"}>
                        Febuary
                      </option>
                      <option value="03" selected={this.state.month == "03"}>
                        March
                      </option>
                      <option value="04" selected={this.state.month == "04"}>
                        April
                      </option>
                      <option value="05" selected={this.state.month == "05"}>
                        May
                      </option>
                      <option value="06" selected={this.state.month == "06"}>
                        June
                      </option>
                      <option value="07" selected={this.state.month == "07"}>
                        July
                      </option>
                      <option value="08" selected={this.state.month == "08"}>
                        August
                      </option>
                      <option value="09" selected={this.state.month == "09"}>
                        September
                      </option>
                      <option value="10" selected={this.state.month == "10"}>
                        October
                      </option>
                      <option value="11" selected={this.state.month == "11"}>
                        November
                      </option>
                      <option value="12" selected={this.state.month == "12"}>
                        December
                      </option>
                    </select> */}
                      </span>
                      <span className="bill-label-background"> {year}
                        {/* <select
                        id="year"
                        className="bill-label-background"
                        onChange={() => this.handleChange}
                      >
                        <option value="2020" selected={this.state.year == "2020"}>
                          2020
                      </option>
                        <option value="2021" selected={this.state.year == "2021"}>
                          2021
                      </option>
                        <option value="2022" selected={this.state.year == "2022"}>
                          2022
                      </option>
                        <option value="2023" selected={this.state.year == "2023"}>
                          2023
                      </option>
                        <option value="2024" selected={this.state.year == "2024"}>
                          2024
                      </option>
                        <option value="2024" selected={this.state.year == "2025"}>
                          2024
                      </option>
                        <option value="2026" selected={this.state.year == "2026"}>
                          2026
                      </option>
                        <option value="2027" selected={this.state.year == "2027"}>
                          2027
                      </option>
                        <option value="2028" selected={this.state.year == "2028"}>
                          2028
                      </option>
                        <option value="2029" selected={this.state.year == "2029"}>
                          2029
                      </option>
                        <option value="2030" selected={this.state.year == "2030"}>
                          2030
                      </option>
                      </select> */}
                      </span>
                    </div>
                  </div>

                  <div className=" mrg-0 pad-0">
                    <table className="table table-borderless bill-table">
                      <tbody>
                        {this.state.data.map((row, i) => (
                          <tr className="table-color1" key={i}>
                            <td
                              style={{ width: "18%" }}
                              className="radius-left tbl-pad"
                            >
                              {row.Brand}
                            </td>
                            <td style={{ width: "5%" }} className="tbl-pad pl-0 ">
                              {row.Card}
                            </td>
                            {/* <td style={{ width: "30px" }} className="tbl-pad pr-0 pl-0" >{row.integer}</td> */}
                            <td
                              style={{ width: "10%" }}
                              className="tbl-pad pr-0 pl-0"
                            >
                              . . . {row.Number}
                            </td>
                            <td style={{ width: "30%" }} className="tbl-pad">
                              <span
                                className="span-color"
                                style={{ backgroundColor: "#FFCA9F" }}
                              >
                                {row.Color}
                              </span>{" "}
                            </td>
                            <td className="tbl-pad" style={{ width: "10%" }}>
                              {row.Date}
                            </td>
                            <td className="tbl-pad" style={{ width: "10%" }}>
                              <span
                                className={`dot  ${$getStatusColor(row.Process)}`}
                              ></span>{" "}
                              {row.Process}
                            </td>
                            <td
                              className="tbl-pad"
                              style={{ width: "8%" }}
                              className="radius-right"
                            >
                              {row.Process == "Success" ? (
                                <img
                                  src={require("../../icons/icon.png")}
                                  width="35px"
                                  height="35px"
                                />
                              ) : (
                                  ""
                                )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-1"></div> */}
          </div>
        </div>
      );
  }
}
export const $getStatusColor = (data) => {
  if (data == "Success") {
    return "success";
  } else if (data == "Failed") {
    return "fail";
  } else return "null";
};
export default BillingDates;
