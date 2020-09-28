import React, { Component } from 'react';
import './SideNav.scss';
import { Link, withRouter } from 'react-router-dom'
import { logOut } from '../Services/Services';

class SideNav extends Component {
  componentDidMount() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }

  }
  openNav = () => {
    document.getElementById("mySidebar").style.width = "13%";
  }

  closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
  }
  render() {
    const { history } = this.props;

    return (
      <div>
        <div className={`w3-sidebar w3-bar-block w3-collapse w3-card sideNav ${isActive(history, "/")} `} id="mySidebar">
          <button className="w3-bar-item w3-button w3-large w3-hide-large text-right" onClick={function (e) {
            document.getElementById("mySidebar").style.width = "0%";
            document.getElementById("mySidebar").style.display = "none";
          }} > &times;</button>
          <h1>WISE<span style={{ fontSize: "15px", fontWeight: 400, marginLeft: "5px" }}> Admin </span></h1>

          <Link to="/admin/" className={`w3-bar-item w3-button  ${isActive(history, "/admin/")}`}>Dashboard</Link>

          <button href="#" className="w3-bar-item w3-button dropdown-btn">Business</button>
          <div className="dropdown-container">
            <Link to="/admin/business/account" className={`w3-bar-item w3-button  ${isActive2(history, "/admin/business/account")}`} >Accounts</Link>
            <Link to="/admin/business/billingdates" className={`w3-bar-item w3-button  ${isActive2(history, "/admin/business/billingdates")}`}>Billing Dates</Link>
          </div>

          <Link to="/admin/consumer" className={`w3-bar-item w3-button  ${isActive(history, "/admin/consumer")} ${isChildActive(history, "/admin/consumer/bizconsumer")}`}>Consumer</Link>
          <button href="#" className="w3-bar-item w3-button dropdown-btn " >Messaging</button>
          <div className="dropdown-container">
            <Link to="/admin/message/traffic" className={`w3-bar-item w3-button  ${isActive2(history, "/admin/message/traffic")}`} >Traffic</Link>
            <Link to="/admin/message/messageconsumer" className={`w3-bar-item w3-button  ${isActive2(history, "/admin/message/messageconsumer")}`}>Message consumers</Link>
            <Link to="/admin/message/supportenquiry" className={`w3-bar-item w3-button  ${isActive2(history, "/admin/message/supportenquiry")}`}>Support enquiry</Link>
          </div>
          <Link to="/admin/policyentry" className={`w3-bar-item w3-button  ${isActive(history, "/admin/policyentry")}`}>Policy entry</Link>
          <Link to="/admin/changepassword" className={`w3-bar-item w3-button  ${isActive(history, "/admin/changepassword")}`}>Change Password</Link>
          <Link to="/admin/logout" className={`w3-bar-item w3-button  ${isActive(history, "/admin/logout")}`}>Log Out</Link>
        </div>
        <div className="w3-main" style={{ marginLeft: "200px" }}>
          <div className="w3-teal">
            <button onClick={function (e) {
              document.getElementById("mySidebar").style.width = "auto";
              document.getElementById("mySidebar").style.display = "block";
            }} className="w3-button w3-teal w3-xlarge w3-hide-large"  >&#9776;</button>
          </div>
        </div>
      </div>
    )
  }
}


export const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  }
  // console.log (history,path)
};
export const isActive2 = (history, path) => {
  if ((history.location.pathname).toString().indexOf(path) !== -1) {
    return "active2";
  }
  // console.log (history,path)
};
export const isChildActive = (history, path) => {
  if ((history.location.pathname).toString().indexOf(path) !== -1) {
    return "active";
  }
  // console.log (history,path)
};

export default withRouter(SideNav);
