import React, { Component } from 'react';
import './MessageConsumer.scss'
import { Label, Input, Form, Button, FormGroup } from 'reactstrap';
import { sendMessageToConsumers } from '../../Services/Services';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class MessageConsumer extends Component {

    state = {
        titlelength: 50,
        titlebase: 500,
        title: "",
        body: "",
        iserror: false,
        errormsg: "",
        isloading: false


    };

    changetitle = (event) => {
        var titlelength = String(event.target.value)
        var maxLength = 50
        this.setState({ titlelength: maxLength - titlelength.length, title: titlelength });
    };
    changetext = (event) => {
        var titlebase = String(event.target.value)
        var maxLength = 500
        this.setState({ titlebase: maxLength - titlebase.length, body: titlebase });
    };

    sendMesg = () => {

        this.setState({ isloading: true, iserror: false })
        sendMessageToConsumers(this.state.title, this.state.body).then((result) => {
            let responseJSON = result;
            console.log(responseJSON)
            if (responseJSON.error) {
                this.setState({
                    iserror: true,
                    errormsg: responseJSON.message
                })
            }
            else {
                alert(responseJSON.message)
                this.setState({ title: "", body: "", titlelength: 50, titlebase: 500 })
            }
            this.setState({ isloading: false })
        })
    }

    render() {
        const { isloading, iserror, errormsg } = this.state
        return (
            <div className="pl-5 pt-3 main-div">
                <Form className="consumer-mesg" >
                    <h4 className="heading pb-5" > Send message to consumer </h4>
                    <FormGroup>
                        <Label className="label-tag">Title</Label>
                        <Input className="pl-0 input-sec" type="text" placeholder="message title" value={this.state.title} id="title" onChange={this.changetitle} />
                        <p className="iner-text pt-2">{this.state.titlelength} characters</p>
                    </FormGroup><br />
                    <FormGroup>
                        <Label className="label-tag">Content</Label>
                        <textarea rows="0" cols="55" className="pl-0 input-sec form-control" type="text" placeholder="message content" value={this.state.body} id="title" onChange={this.changetext} />
                        <p className="iner-text pt-2">{this.state.titlebase} characters</p>
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
                                />) : (<Button onClick={this.sendMesg} className="btn-lg message-btn"> Send </Button>)
                            }
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
}


// export const change = ( event) => {

//     console.log (event.target.value)
//   };

export default MessageConsumer;