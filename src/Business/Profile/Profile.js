import React, { Component } from 'react';
import { withRouter } from 'react-router';
import QrCode from 'qrcode.react'
import './Profile.scss'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            biz_user: null
        }
    }
    // componentDidMount(){
    //    const pakistan = this.state.biz_user;
    //    console.log("pakistab" , pakistan)
    // }
    downloadQR = () => {
        const canvas = document.getElementById("qrcode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = this.props.biz_user.brand_name+".png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    render() {
        const { biz_user } = this.props
        // console.log("profile component" , this.props)
        
        return (
            <div className="profile-main-div">
                <div className="container-fluid" >
                    <div className="row heading-size">
                        <div className="col-4"><p>Business name</p><span>{biz_user.brand_name}</span></div>
                        <div className="col-5"><p>Business address</p><span>{biz_user.address}</span></div>
                        <div className="col-3"><p>Plan</p><span className="span-color">{biz_user.plan}</span></div>
                    </div>
                    <div className="row heading-size">
                        <div className="col-4"><p>Email</p><span>{biz_user.email}</span></div>
                        <div className="col-5"><p>Password</p><span>{biz_user.password.substring(0, 15)}</span><span className="pass-span">encrypted</span></div>
                        <div className="col-3"><p>Terms of use</p><span className="span-color-term">{biz_user.plan}</span></div>
                    </div>
                    <div className="row heading-size">
                        <div className="col-4"><p>Person in-charge</p><span>{biz_user.incharge_name}</span></div>
                        <div className="col-5"><p>Payment type</p><span>{biz_user.card_type}</span><span className="int-span">....</span><span>{biz_user.card_number}</span></div>
                        <div className="col-3"><p>QR code</p> <QrCode onClick={this.downloadQR} id="qrcode" className="qr" value={biz_user.brand_name+"|"+biz_user.id} /></div>
                    </div>
                    <div style={{ marginTop: "-4%" }} className="row heading-size">
                        <div className="col-12"><p>Mobile</p><span>{biz_user.mobile} </span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);