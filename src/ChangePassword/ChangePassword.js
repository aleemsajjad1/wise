import React, { Component } from 'react';
import './ChangePassword.scss'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { updateAdminPassword } from '../Services/Services';


class ChangePassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            oldpassword: '',
            newpassword: '',
            conformpassword: '',
            isloading: false,
            iserror: false,
            errormsg: "",
        }
    }


    // handleSubmit = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    //     const { newpassword, conformpassword } = this.state;
    //     if (newpassword === conformpassword) {
    //         alert("Passwords  match");
    //     } else {
    //         //  API call
    //     }
    //     var md5 = require('md5');
    //     console.log("old password", md5(this.state.oldpassword))
    //     this.setState({
    //         isloading: true
    //     })
    // }

    updatePass = () => {

        this.setState({ isloading: true, iserror: false })


        const old = document.getElementById("oldpassword").value;
        const New = document.getElementById("newpassword").value;
        const confirm = document.getElementById("conformpassword").value;

        console.log("pass", old, New, confirm)

        if (New == confirm && old != "" && New != "") {
            updateAdminPassword(New, old).then((result) => {
                let responseJSON = result;
                console.log("update pass", responseJSON)
                if (responseJSON.error) {
                    this.setState({
                        iserror: true,
                        errormsg: responseJSON.message
                    })
                }
                else {
                    alert(responseJSON.message)
                }
                this.setState({
                    isloading: false
                })
            })
        }
        else {
            this.setState({
                iserror: true,
                errormsg: "Password Dosn't Match Or Field Empty",
                isloading: false

            })
        }

    }

    render() {
        const { isloading, errormsg, iserror } = this.state
        return (
            <div className="main-div pt-4 pl-5">
                <Form className="change-pass" >
                    <h4 className="heading-pass pb-5" > Change Your Password </h4>
                    <FormGroup>
                        <Label className="pass-label-tag">Old Password</Label>
                        <Input className="input-sec-pass pl-0" id="oldpassword" type="password" name="oldpassword" placeholder="Enter Your Old Password" />

                    </FormGroup><br />
                    <FormGroup>
                        <Label className="pass-label-tag">New Password</Label>
                        <Input className="input-sec-pass pl-0" id="newpassword" type="password" name="newpassword" placeholder="Enter New Password" />

                    </FormGroup><br />
                    <FormGroup>
                        <Label className="pass-label-tag">Confirm Password</Label>
                        <Input className="input-sec-pass pl-0" id="conformpassword" type="password" name="conformpassword" placeholder="Confirm Password " />

                    </FormGroup>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-6">
                            {
                                (iserror) ? (<p className="text-danger">{errormsg}</p>) : ("")
                            }
                        </div>
                        <div className="col-6">

                            {
                                (isloading) ? (<Loader className=" loaader-align"
                                    type="Oval"
                                    color="#323A40"
                                    height={30}
                                    width={30}
                                />) : (<Button className="btn-lg pass-btn" onClick={this.updatePass} > Update </Button>)
                            }
                        </div>

                    </div>

                </Form>

            </div>
        )
    }
}


export default ChangePassword;