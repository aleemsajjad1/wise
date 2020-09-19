import React, { Component } from "react";
import "./Dashboard.scss";
import Cookies from "js-cookie";

class Dashboard extends Component {
  render() {
    // const details = localStorage.getItem("user_detail");
    const details = JSON.parse(Cookies.get("user_detail"));
    console.log(details);
    return (
      <div className="scrool-mobile">
        <div className=" row pt-2">
          <div className="col-12 pl-3">
            <div style={{ width: "" }} className=" dashboard-card card-color-1">
              <span className="card-no">{details.biz_account}</span>
              <span className="card-name pt-2">Business</span>
            </div>
            <div style={{ width: "" }} className="dashboard-card card-color-2">
              <span className="card-no">{details.consumer_account}</span>
              <span className="card-name pt-2">Consumer</span>
            </div>
            <div style={{ width: "" }} className="dashboard-card card-color-3">
              <span className="card-no">{details.free_plan}</span>
              <span className="card-name pt-2">Free Plan </span>
            </div>
            <div style={{ width: "" }} className="dashboard-card card-color-4">
              <span className="card-no">{details.essential_plan}</span>
              <span className="card-name pt-2">Essential Plan</span>
            </div>
            <div style={{ width: "" }} className="dashboard-card card-color-5">
              <span className="card-no">{details.standard_plan}</span>
              <span className="card-name pt-2">Standard Plan</span>
            </div>
            <div style={{ width: "" }} className="dashboard-card card-color-6">
              <span className="card-no">{details.premium_plan}</span>
              <span className="card-name pt-2">Premium Plan</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
