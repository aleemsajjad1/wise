// import React, { Component } from "react";
// import "./Admin.scss";
// // import AppRouter from '../AppRouter';
// import { Link, BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
// // import Dashboard from "../Dashboard/Dashboard";
// // import BillingDates from "../Business/BillingDates/BillingDatess";
// // import Consumer from "../Consumer/Consumer";
// // import ChangePassword from "../ChangePassword/ChangePassword";
// // import Account from "../Business/Account/Account";
// // import MessageConsumer from "../Messanging/MessageConsumer/MessageConsumer";
// // import Traffic from "../Messanging/Traffic/Traffic";
// // import PolicyEntry from "../PolicyEntry/PolicyEntry";
// // import SupportEnquiry from "../Messanging/SupportEnquiry/SupportEnquiry.";
// // import Login from "../Login/Login";
// // import $ from 'jquery';

// class Admin extends Component {

//   componentDidMount() {
//     var dropdown = document.getElementsByClassName("dropdown-btn");
//     var i;
//     for (i = 0; i < dropdown.length; i++) {
//       dropdown[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var dropdownContent = this.nextElementSibling;
//         if (dropdownContent.style.display === "block") {
//           dropdownContent.style.display = "none";
//         } else {
//           dropdownContent.style.display = "block";
//         }
//       });
//     }
//   }

//   render() {
//     const { history } = this.props;

//     return (
//       <div className="container-fluid m-0 ">
//         <div className="row">
//           <div className="col-12 m-0 p-0">
//             <div class="empty-div"></div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-2 m-0 p-0">
//             <div class={`w3-sidebar w3-bar-block w3-collapse w3-card sideNav ${isActive(history, "/")} `} id="mySidebar">
//               <button class="w3-bar-item w3-button w3-large w3-hide-large" /* onclick="w3_close()" */>Close &times;</button>
//               <h1>WISE<span style={{ fontSize: "15px", marginLeft: "5px" }}> Admin </span></h1>

//               <Link to="/admin/dashboard" className={`w3-bar-item w3-button  ${isActive(history, "/admin/dashboard")}`}>Dashboard</Link>

//               <button href="#" class="w3-bar-item w3-button dropdown-btn">Business</button>
//               <div class="dropdown-container">
//                 <Link to="/admin/account" className={`w3-bar-item w3-button  ${isActive(history, "/admin/account")}`} >Accounts</Link>
//                 <Link to="/admin/billingdates" className={`w3-bar-item w3-button  ${isActive(history, "/admin/billingdates")}`}>Billing Dates</Link>
//               </div>

//               <Link to="/admin/consumer" class={`w3-bar-item w3-button  ${isActive(history, "/admin/consumer")}`}>Consumer</Link>
//               <button href="#" class="w3-bar-item w3-button dropdown-btn " >Messaging</button>
//               <div class="dropdown-container">
//                 <Link to="/admin/traffic" className={`w3-bar-item w3-button  ${isActive(history, "/admin/traffic")}`} >Traffic</Link>
//                 <Link to="/admin/messageconsumer" className={`w3-bar-item w3-button  ${isActive(history, "/admin/messageconsumer")}`}>Message consumers</Link>
//                 <Link to="/admin/supportenquiry" className={`w3-bar-item w3-button  ${isActive(history, "/admin/supportenquiry")}`}>Support enquiry</Link>
//               </div>
//               <Link to="/admin/policyentry" class={`w3-bar-item w3-button  ${isActive(history, "/admin/policyentry")}`}>Policy Entry</Link>
//               <Link to="/admin/changepassword" class={`w3-bar-item w3-button  ${isActive(history, "/admin/changepassword")}`}>Change Password</Link>
//               <Link to="/" class={`w3-bar-item w3-button`}>Log Out</Link>
//               {/* <button className="w3-bar-item w3-btn" onClick={this.props.history.push('/')}>Log Out</button> */}
//             </div>
//             <div class="w3-main" style={{ marginLeft: "200px" }}>
//               <div class="w3-teal">
//                 <button class="w3-button w3-teal w3-xlarge w3-hide-large" /* onclick="w3_open()" */>&#9776;</button>
//               </div>
//             </div>
//           </div>


//           <div className="col-10">
//             {/* <Router>
//               <Switch>
                
//             <Route exact path={"/admin/dashboard"} component={Dashboard}  ></Route>
//             <Route exact path={"/admin/billingdates"} component={BillingDates}  ></Route>
//             <Route exact path={"/admin/consumer"} component={Consumer}  ></Route>
//             <Route exact path={"/admin/changepassword"} component={ChangePassword}  ></Route>
//             <Route exact path={"/admin/account"} component={Account}  ></Route>
//             <Route exact path={"/admin/messageconsumer"} component={MessageConsumer}  ></Route>
//             <Route exact path={"/admin/traffic"} component={Traffic}  ></Route>
//             <Route exact path={"/admin/policyentry"} component={PolicyEntry}  ></Route>
//             <Route exact path={"/admin/supportenquiry"} component={SupportEnquiry}  ></Route>
                
//               </Switch> 
//               </Router> */}
            
//           </div>







//         </div>


//       </div>
//     );
//   }
// }

// export const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//     return "active";
//   }
//   console.log(history, path)
// };

// export default withRouter(Admin);

import React, { Component } from "react";
import "./Admin.scss";
// import AppRouter from '../AppRouter';
import  { Link, BrowserRouter as router,Route, withRouter,Switch } from 'react-router-dom'
// import Dashboard from "../Dashboard/Dashboard";
// import BillingDates from "../Business/BillingDates/BillingDatess";
// import Consumer from "../Consumer/Consumer";
// import ChangePassword from "../ChangePassword/ChangePassword";
// import Account from "../Business/Account/Account";
// import MessageConsumer from "../Messanging/MessageConsumer/MessageConsumer";
// import Traffic from "../Messanging/Traffic/Traffic";
// import PolicyEntry from "../PolicyEntry/PolicyEntry";
// import SupportEnquiry from "../Messanging/SupportEnquiry/SupportEnquiry.";
// import Login from "../Login/Login";
// import $ from 'jquery';






class Admin extends Component {

    componentDidMount(){
      var dropdown = document.getElementsByClassName("dropdown-btn");
      var i;
      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
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

  render() {

    const { history } = this.props;
    
    return ( 
      <div>
      <div  className="container-fluid m-0 ">
        <div className="row">
          <div className="col-lg-12 m-0 p-0">
            <div class="w3-container empty-div"></div>
          </div>
        </div>
        </div>
        <div style={{padding:"0px"}} className="container-fluid mrg-0 pad-0" >
        <div className="row">
          <div className="col-lg-2 m-0 p-0">
          <div class={`w3-sidebar w3-bar-block w3-collapse w3-card sideNav ${isActive(history, "/")} `} id="mySidebar">
          <button class="w3-bar-item w3-button w3-large w3-hide-large" /* onclick="w3_close()" */>Close &times;</button>
          <h1>WISE<span style={{ fontSize: "15px", marginLeft: "5px" }}> Admin </span></h1>

          <Link to="/admin/dashboard" className={`w3-bar-item w3-button  ${isActive(history, "/admin/dashboard")}` }>Dashboard</Link>
          
           <button href="#" class="w3-bar-item w3-button dropdown-btn">Business</button> 
           <div class="dropdown-container">
              <Link to="/admin/account" className={`w3-bar-item w3-button  ${isActive(history, "/admin/account")}` } >Accounts</Link>
              <Link to="/admin/billingdates" className={`w3-bar-item w3-button  ${isActive(history, "/admin/billingdates")}` }>Billing Dates</Link>
            </div>
              
          <Link to="/admin/consumer" class={`w3-bar-item w3-button  ${isActive(history, "/admin/consumer")}` }>Consumer</Link>
          <button href="#" class="w3-bar-item w3-button dropdown-btn " >Messaging</button> 
           <div class="dropdown-container">
              <Link to="/admin/traffic" className={`w3-bar-item w3-button  ${isActive(history, "/admin/traffic")}` } >Traffic</Link>
              <Link to="/admin/messageconsumer" className={`w3-bar-item w3-button  ${isActive(history, "/admin/messageconsumer")}` }>Message consumers</Link>
              <Link to="/admin/supportenquiry" className={`w3-bar-item w3-button  ${isActive(history, "/admin/supportenquiry")}` }>Support enquiry</Link>
            </div>
          <Link to="/admin/policyentry" class={`w3-bar-item w3-button  ${isActive(history, "/admin/policyentry")}` }>Policy Entry</Link>
          <Link to="/admin/changepassword" class={`w3-bar-item w3-button  ${isActive(history, "/admin/changepassword")}` }>Change Password</Link>
          <Link to="/" class={`w3-bar-item w3-button` }>Log Out</Link>
          {/* <button className="w3-bar-item w3-btn" onClick={this.props.history.push('/')}>Log Out</button> */}
        </div>
        <div class="w3-main" style={{ marginLeft: "200px" }}>
          <div class="w3-teal">
            <button class="w3-button w3-teal w3-xlarge w3-hide-large" /* onclick="w3_open()" */>&#9776;</button>
          </div>
        </div>
          </div>

          
          <div className="col-lg-10">
          {/* <Switch>
            <Route path ="/admin">
            <Route exact path={"/admin/dashboard"} component={Dashboard}  ></Route>
            <Route exact path={"/admin/billingdates"} component={BillingDates}  ></Route>
            <Route exact path={"/admin/consumer"} component={Consumer}  ></Route>
            <Route exact path={"/admin/changepassword"} component={ChangePassword}  ></Route>
            <Route exact path={"/admin/account"} component={Account}  ></Route>
            <Route exact path={"/admin/messageconsumer"} component={MessageConsumer}  ></Route>
            <Route exact path={"/admin/traffic"} component={Traffic}  ></Route>
            <Route exact path={"/admin/policyentry"} component={PolicyEntry}  ></Route>
            <Route exact path={"/admin/supportenquiry"} component={SupportEnquiry}  ></Route>
            </Route>
        </Switch> */}
          </div>
        </div>
      </div>






        
        
      </div>
      
    );
  }
}

export const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return "active";
  }
  console.log (history,path)
};

export default withRouter (Admin);
