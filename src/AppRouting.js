import React from 'react';

import Dashboard from './Dashboard/Dashboard';
import Header from './Header/Header';
// import {DefaultRoute} from 'react-router';

import { Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Account from './Business/Account/Account';
import Consumer from './Consumer/Consumer';
import BillingDates from './Business/BillingDates/BillingDatess';
import ChangePassword from './ChangePassword/ChangePassword';
import MessageConsumer from './Messanging/MessageConsumer/MessageConsumer';
import SupportEnquiry from './Messanging/SupportEnquiry/SupportEnquiry.';
import Traffic from './Messanging/Traffic/Traffic';
import PolicyEntry from './PolicyEntry/PolicyEntry';
import BizUser from './Business/BizUser';
import BizConsumer from './Consumer/BizConsumer/BizConsumer'
import Logout from './Logout/LogOut';


const MainRouter = () => (
    <div>
        <Switch>
            <Route path={"/admin"}>
                <Header>
                    <Switch>
                        <Route exact path={"/admin"} component={Dashboard}></Route>
                        <Route exact path={"/admin/"} component={Dashboard}></Route>
                        <Route exact path={"/admin/business/account"} component={Account}></Route>
                        <Route exact path={"/admin/business/account/bizuser/:biz_user"} component={BizUser}></Route>
                        <Route exact path={"/admin/business/billingdates"} component={BillingDates}></Route>
                        <Route exact path={"/admin/changepassword"} component={ChangePassword}></Route>
                        <Route exact path={"/admin/consumer"} component={Consumer}></Route>
                        <Route exact path={"/admin/consumer/bizconsumer/:biz_consumer"} component={BizConsumer}></Route>
                        <Route exact path={"/admin/message/messageconsumer"} component={MessageConsumer}></Route>
                        <Route exact path={"/admin/message/supportenquiry"} component={SupportEnquiry}></Route>
                        <Route exact path={"/admin/message/traffic"} component={Traffic}></Route>
                        <Route exact path={"/admin/policyentry"} component={PolicyEntry}></Route>
                        <Route exact path={"/admin/logout"} component={Logout}></Route>
                    </Switch>
                </Header>
            </Route>
        </Switch>
        <Switch>
            <Route exact path={"/"} component={Login}></Route>
        </Switch>
    </div>
);

export default MainRouter;