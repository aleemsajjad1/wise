import React, { Component } from "react";
import { Label } from "reactstrap";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { Adminlogin, isAuthenticate } from "../Services/Services";
// import md5 from 'md5';
import { withRouter, Redirect } from "react-router";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  state = {
    email: "",
    password: "",
    iserror: false,
    errormsg: "no error",
    isloading: false,
  };

  componentDidMount() {}

  login = () => {
    // console.log(this.state.email, this.state.password)
    this.setState({ isloading: true });
    Adminlogin(this.state.email, this.state.password).then((result) => {
      console.log("login", result);
      let responseJSON = result;
      if (responseJSON.error) {
        console.log("erroe mesg", responseJSON.message);
        this.setState({
          iserror: true,
          errormsg: responseJSON.message,
        });
      } else {
        if (responseJSON.data.user.token) {
          localStorage.setItem("user", responseJSON.data.user);
          localStorage.setItem("user_detail", responseJSON.data);
          Cookies.set("user_detail", responseJSON.data, { expires: 1 });
          Cookies.set("token", responseJSON.data.user.token, { expires: 1 });
          this.props.history.push("/admin/");
          // console.log("token" , responseJSON.data.user.token)
        }
      }
      this.setState({ isloading: false });
    });
  };

  // onChange(e) {
  //   // this.setState({ [e.target.name]: e.target.value });
  //   // console.log(this.state)
  // }
  handleChange = (e) => {
    if (e.target.id === "id") {
      const email = e.target.value;
      this.setState({ email: email });
    } else if (e.target.id === "pass") {
      const pass = e.target.value;
      this.setState({ password: pass });
    }
  };

  render() {
    const { iserror, errormsg, isloading } = this.state;

    return !isAuthenticate() ? (
      <Form className="Login-form p-5">
        <h2 className="text-center"> WISE Login </h2>
        {iserror ? <p className="text-danger text-center">{errormsg}</p> : ""}
        <Form.Group controlId="id">
          <Label>Email</Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            required
            name="email"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="pass">
          <Label>Password</Label>
          <Form.Control
            type="password"
            placeholder="Enter Your Password"
            required
            name="password"
            onChange={this.handleChange}
          />
        </Form.Group>
        {isloading ? (
          <Loader
            className="text-center"
            type="Oval"
            color="#323A40"
            height={50}
            width={50}
            // timeout={3000} //3 secs
          />
        ) : (
          <Button className="btn-lg btn-dark btn-block" onClick={this.login}>
            Login
          </Button>
        )}
      </Form>
    ) : (
      <Redirect to="/admin/"></Redirect>
    );
  }
}

export default withRouter(Login);
