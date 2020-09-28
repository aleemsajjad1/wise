import React, { Component } from "react";
import "./Redemption.scss";
import ReactStars from "react-stars";
import { withRouter } from "react-router";
import Rating from "@material-ui/lab/Rating";
import DatePicker from "react-datepicker";
import * as moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import {
  getRedemptionDetailsByDateByBizId,
  logOut,
} from "../../Services/Services";
import { data } from "jquery";
import $ from "jquery";

class Redemption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biz_user: null,
      day: null,
      month: null,
      year: null,
      redumptionPoint: props.biz_user.redemption.points,
      biz_id: props.biz_user.id,
      redumptionReward: props.biz_user.redemption.rewards,
    };
  }
  componentDidMount() {
    var coll = document.getElementsByClassName("collapsible1");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    var day = new Date().getDate();
    if (day.toString().length < 2) day = "0" + day;
    var month = new Date().getMonth() + 1;
    if (month.toString().length < 2) month = "0" + month;
    var year = new Date().getFullYear();

    this.setState({ day: day, month: month, year: year });
  }
  handleChange = (biz_id) => {
    const days = document.getElementById("days").value;
    const months = document.getElementById("months").value;
    const years = document.getElementById("years").value;

    const date = years + "-" + months + "-" + days;
    console.log("Current Date", date);

    getRedemptionDetailsByDateByBizId(date.toString(), biz_id.toString()).then(
      (res) => {
        if (res.message == "Unauthenticated.") {
          logOut();
        } else {
          // this.setState({ roll: res.data })
          // console.log("calling date api", res.data)
          this.setState({
            redumptionPoint: res.data.points,
            redumptionReward: res.data.rewards,
          });
          // this.setState({ isloading: false })
        }
      }
    );
  };

  render() {
    const { redumptionPoint, biz_id, redumptionReward } = this.state;

    return (
      <div className="container-fluid" style={{ paddingTop: "5%" }}>
        <div className="row">
          <div>
            <select
              className="select"
              id="days"
              className="redp-label-background1"
              onChange={() => this.handleChange(biz_id)}
            >
              <option value="01" selected={this.state.day == "01"}>
                01
              </option>
              <option value="02" selected={this.state.day == "02"}>
                02
              </option>
              <option value="03" selected={this.state.day == "03"}>
                03
              </option>
              <option value="04" selected={this.state.day == "04"}>
                04
              </option>
              <option value="05" selected={this.state.day == "05"}>
                05
              </option>
              <option value="06" selected={this.state.day == "06"}>
                06
              </option>
              <option value="07" selected={this.state.day == "07"}>
                07
              </option>
              <option value="08" selected={this.state.day == "08"}>
                08
              </option>
              <option value="09" selected={this.state.day == "09"}>
                09
              </option>
              <option value="10" selected={this.state.day == "10"}>
                10
              </option>
              <option value="11" selected={this.state.day == "11"}>
                11
              </option>
              <option value="12" selected={this.state.day == "12"}>
                12
              </option>
              <option value="13" selected={this.state.day == "13"}>
                13
              </option>
              <option value="14" selected={this.state.day == "14"}>
                14
              </option>
              <option value="15" selected={this.state.day == "15"}>
                15
              </option>
              <option value="16" selected={this.state.day == "16"}>
                16
              </option>
              <option value="17" selected={this.state.day == "17"}>
                17
              </option>
              <option value="18" selected={this.state.day == "18"}>
                18
              </option>
              <option value="19" selected={this.state.day == "19"}>
                19
              </option>
              <option value="20" selected={this.state.day == "20"}>
                20
              </option>
              <option value="21" selected={this.state.day == "21"}>
                21
              </option>
              <option value="22" selected={this.state.day == "22"}>
                22
              </option>
              <option value="23" selected={this.state.day == "23"}>
                23
              </option>
              <option value="24" selected={this.state.day == "24"}>
                24
              </option>
              <option value="25" selected={this.state.day == "25"}>
                25
              </option>
              <option value="26" selected={this.state.day == "26"}>
                26
              </option>
              <option value="27" selected={this.state.day == "27"}>
                27
              </option>
              <option value="28" selected={this.state.day == "28"}>
                28
              </option>
              <option value="29" selected={this.state.day == "29"}>
                29
              </option>
              <option value="30" selected={this.state.day == "30"}>
                30
              </option>
              <option value="31" selected={this.state.day == "31"}>
                31
              </option>
            </select>
          </div>
          <div className="pl-3">
            <select
              className="select"
              id="months"
              className="redp-label-background1"
              onChange={() => this.handleChange(biz_id)}
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
            </select>
          </div>
          <div className="pl-3">
            <select
              className="select"
              id="years"
              className="redp-label-background1"
              onChange={() => this.handleChange(biz_id)}
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
            </select>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5 message-p">
            <p>Points</p>
          </div>
          <div className="col-5 message-p pl-5">
            <p className="pl-2">Rewards</p>
          </div>
          <div className="col-1 message-p"></div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row heading-red">
              <div className="col-4 ">
                <h6>Name</h6>
              </div>
              <div className="col-2 pl-0">
                <h6>Points</h6>
              </div>
              <div className="col-4 ">
                <h6>In-store ratings</h6>
              </div>
            </div>
            <div className="for-media-query" style={{ width: "300px" }}>
              {redumptionPoint.map((redemp) => (
                <div className="bg-redp-color color-for-bg ">
                  <div className="row collapsible1 m-0">
                    <div className="col-5 redep-inr">
                      {redemp.first_name + " " + redemp.last_name}
                    </div>
                    <div className="col-2 redep-inr">{redemp.points}</div>
                    <div className=" col-5 redep-inr">
                      <Rating
                        className="pl-3 pt-1"
                        name="half-rating-read"
                        defaultValue={redemp.rating}
                        precision={0.1}
                        size={"small"}
                        readOnly
                      />
                    </div>
                  </div>
                  <div style={{ display: "none" }}>
                    <div className="row ml-0">
                      <div className="col-8 redmp-hidden-bg pl-2">
                        <p>{redemp.comment}</p>
                      </div>
                      <div className="col-4 redmp-hidden-bg">
                        <span className="hidden-time1">
                          {redemp.created_at.split(" ")[1]}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-5 pl-0">
            <div style={{ width: "500px" }} className="row heading-red">
              <div className="col-3 pl-0">
                <h6>Name</h6>
              </div>
              <div className="col-2 pl-0">
                <h6>Points</h6>
              </div>
              <div className="col-4 pl-0">
                <h6>In-store ratings</h6>
              </div>
            </div>
            {redumptionReward.map((redempReward) => (
              <div className="row bg-redption-color color-for-bg">
                <div className="col-12">
                  <div className="row ">
                    <div className="col-5 redep-inr">
                      {redempReward.first_name + " " + redempReward.last_name}
                    </div>
                    {redempReward.redemption_type == "point" ? (
                      <div className="col-2 redep-inr">
                        {redempReward.points}
                      </div>
                    ) : (
                        <div className="col-2 redep-inr text-danger">
                          -{redempReward.points}
                        </div>
                      )}
                    {/* <div className="col-2 redep-inr">{redempReward.points}</div> */}
                    <div className="col-5 redep-inr">
                      {" "}
                      <Rating
                        className="pt-1 pl-3"
                        name="half-rating-read"
                        defaultValue={redempReward.rating}
                        precision={0.1}
                        size={"small"}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 redep-title-bold">
                      {redempReward.title}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-9 redep-feedbck">
                      {redempReward.comment}
                    </div>
                    <div className="col-3 redep-date">
                      {redempReward.created_at.split(" ")[1]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    );
  }
}

//   $(document).ready(function(){
//     var CurrentDate=new Date();

//     $("#year").val(CurrentDate.getYear());
//     $("#month").val(CurrentDate.getFullYear());
//     $("#day").val(CurrentDate.getDate());
//   });

export default withRouter(Redemption);
