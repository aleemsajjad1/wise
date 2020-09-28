import React, { Component } from 'react';
import './RedemptionActivity.scss';
import ReactStars from 'react-stars'
import { withRouter } from 'react-router';
import { getRedemptionDetailsByDateByCustomerId, logOut } from '../../Services/Services'
import Rating from '@material-ui/lab/Rating';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class RedemptionActivity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            biz_consumer: null,
            month: null,
            dateloader: false,
            year: null,
            redumpActivity: props.biz_consumer.redemption,
            consumer_id: props.biz_consumer.id

        }
    }

    componentDidMount() {
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                // this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }

        var month = new Date().getMonth() + 1;
        if (month.toString().length < 2) month = "0" + month;
        var year = new Date().getFullYear();

        this.setState({ month: month, year: year })

    }


    handleChange = (id) => {

        this.setState({ dateloader: true })

        const months = document.getElementById("month").value;
        const years = document.getElementById("year").value;

        const date = years + "-" + months
        // console.log("hor sab khair a", date)

        getRedemptionDetailsByDateByCustomerId(date.toString(), id.toString()).then((res) => {
            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                // console.log("calling dateeeee api", res.data)
                this.setState({
                    redumpActivity: res.data,
                })
                this.setState({
                    dateloader: false
                })
                // this.setState({ isloading: false })
            }
        })

    };

    render() {
        const { redumpActivity, consumer_id, dateloader } = this.state
        console.log("kokokko", redumpActivity)

        return (
            <div className="container-fluid pb-5" style={{ paddingTop: "5%" }}>
                <div className="row">
                    <div className="col-12">

                        <span style={{ textAlign: "center" }}>
                            <select id="month" className="redp-background" onChange={() => this.handleChange(consumer_id)}  >
                                <option value="01" selected={this.state.month == "01"}>January</option>
                                <option value="02" selected={this.state.month == "02"}>Febuary</option>
                                <option value="03" selected={this.state.month == "03"}>March</option>
                                <option value="04" selected={this.state.month == "04"}>April</option>
                                <option value="05" selected={this.state.month == "05"}>May</option>
                                <option value="06" selected={this.state.month == "06"}>June</option>
                                <option value="07" selected={this.state.month == "07"}>July</option>
                                <option value="08" selected={this.state.month == "08"}>August</option>
                                <option value="09" selected={this.state.month == "09"}>September</option>
                                <option value="10" selected={this.state.month == "10"}>October</option>
                                <option value="11" selected={this.state.month == "11"}>November</option>
                                <option value="12" selected={this.state.month == "12"}>December</option>
                            </select>
                        </span>
                        <span>
                            <select id="year" className="redp-background" onChange={() => this.handleChange(consumer_id)}>
                                <option value="2020" selected={this.state.year == "2020"}>2020</option>
                                <option value="2021" selected={this.state.year == "2021"}>2021</option>
                                <option value="2022" selected={this.state.year == "2022"}>2022</option>
                                <option value="2023" selected={this.state.year == "2023"}>2023</option>
                                <option value="2024" selected={this.state.year == "2024"}>2024</option>
                                <option value="2024" selected={this.state.year == "2025"}>2024</option>
                                <option value="2026" selected={this.state.year == "2026"}>2026</option>
                                <option value="2027" selected={this.state.year == "2027"}>2027</option>
                                <option value="2028" selected={this.state.year == "2028"}>2028</option>
                                <option value="2029" selected={this.state.year == "2029"}>2029</option>
                                <option value="2030" selected={this.state.year == "2030"}>2030</option>

                            </select>
                        </span>
                    </div>
                </div>

                <div className="mt-5"><p className="point-value ml-2">Points</p></div>
                {/* </div> */}

                <div className="row heading-red ml-0">
                    <div className="col-4 pl-0"><h6>Business</h6></div>
                    <div className="col-4"><h6>Redemption</h6></div>
                    <div className="col-4 pl-4"><h6>In-store ratings</h6></div>
                </div>
                {/* <div className="scrool"> */}
                {
                    dateloader ? (<Loader className="text-center loader"
                        type="Oval"
                        color="#323A40"
                        height={200}
                        width={200}
                    />) : (
                            <div>
                                {
                                    redumpActivity.map((el) => (
                                        <div className="color-for-bg activity-size">
                                            <div className=" ">
                                                <div className="row collapsible m-0">
                                                    <div className="col-4 redep-act-inr">{el.name}</div>
                                                    <div className="col-1 redep-act-inr"></div>
                                                    <div className="col-4 redep-act-inr">{`${el.points + " " + el.redemption_type}`}</div>
                                                    <div className="col-3 redep-act-inr"><Rating className="pl-5"
                                                        name="half-rating-read"
                                                        defaultValue={el.rating}
                                                        precision={0.1}
                                                        size={"small"}
                                                        readOnly />
                                                    </div>
                                                </div>

                                                <div style={{ display: "none" }}>
                                                    <div className="row ml-0 " >
                                                        <div className="col-9 hidden-bg m-0" ><p>{el.comment}</p></div>
                                                        <div className="col-3 hidden-bg pt-4 pl-5"><span className="hidden-time pt-2">{el.created_at.split(" ")[1]}</span> </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                }
            </div>

            // </div>


        )
    }
}

export default withRouter(RedemptionActivity);