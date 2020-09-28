import React, { Component } from 'react';
import './CustomerBase.scss';
import ReactStars from 'react-stars'
import { Line, Bar, HorizontalBar } from 'react-chartjs-2';
import { getRedemptionDetailsByConsumerIdByBizId, logOut } from '../../Services/Services';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class CustomerBase extends Component {
    constructor() {
        super()
        this.state = {
            biz_user: null,
            consumerDetails: true,
            roll: null,
            isloading: false
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

    }

    getRedempDetails(biz_id, id) {
        // console.log("hello word", biz_id,id)
        this.setState({ consumerDetails: false })
        this.setState({ isloading: true })
        getRedemptionDetailsByConsumerIdByBizId(biz_id.toString(), id.toString()).then((res) => {
            // this.setState({
            //     isLoading: false
            // })
            // console.log("consumer detailsssss", res)
            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                this.setState({ roll: res.data })
                console.log("pakistannnnn", res.data)
                this.setState({ isloading: false })
            }
        })
    }

    back = () => {
        this.setState({ consumerDetails: true });
    }


    render() {
        const cunsumers = this.props.biz_user.customer_base
        const cunsumerData = this.props.biz_user.customer_base.details
        const ageGraph = this.props.biz_user.customer_base.age
        const birthdayGraph = this.props.biz_user.customer_base.birthday
        const raceGraph = this.props.biz_user.customer_base.race
        const { consumerDetails, roll, isloading } = this.state

        return (
            consumerDetails ? (<div className="chartss" style={{ paddingTop: "5%" }}>
                <div className="row">
                    <div style={{ width: "13%", paddingLeft: "2%" }}><p style={{ fontWeight: "bold" }}>Customer base </p><p>{cunsumers.customers}</p> <br /><p style={{ fontWeight: "bold" }}>Points redemption </p> <p>{cunsumers.points}</p></div>
                    <div className="graph-customerbase">
                        <div className="row heading-red">
                            <div className="col-5"><h6>Name</h6></div>
                            <div className="col-2 pl-0"><h6>Points</h6></div>
                            <div className="col-5 pl-4"><h6>Recent ratings</h6></div>
                        </div>
                        <div className="scrool">
                            <div style={{ width: "300px" }}>
                                {
                                    cunsumerData.map((redemp) => (
                                        <div className="color-for-bg-customer bg-redp-color" onClick={() => this.getRedempDetails(redemp.biz_account_id, redemp.user_id)}>
                                            {/* <div> */}
                                            <div className="row m-0">

                                                <div className="col-5 redep-inr">{redemp.first_name + " " + redemp.last_name}</div>
                                                <div className="col-2 redep-inr">{redemp.points}</div>
                                                <div className=" col-5 redep-inr"><Rating className="pl-3"
                                                    name="half-rating-read"
                                                    defaultValue={redemp.recent_rating}
                                                    precision={0.1}
                                                    size={"small"}
                                                    readOnly />
                                                </div>
                                            </div>
                                            <div style={{ display: "none" }}>
                                                <div className="row ml-0">
                                                    <div className="col-9 redmp-hidden-bg"><p>{redemp.feedback}</p></div>
                                                    <div className="col-3 redmp-hidden-bg"><span className="hidden-time">{redemp.time}</span></div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="chart-width ">
                        <div className="ml-3">
                            <Line
                                data={{
                                    labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
                                    datasets: [
                                        {
                                            fill: false,
                                            backgroundColor: '#F07321',
                                            lineTension: 0,
                                            borderColor: '#F07321',
                                            enabled: false,
                                            data: ageGraph
                                        }
                                    ],
                                }}

                                options={{
                                    plugins: {
                                        datalabels: {
                                            display: false
                                        },
                                    },
                                    legend: {
                                        display: false,
                                        position: 'right'
                                    },
                                    tooltips: {
                                        enabled: false,
                                    },
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                            }
                                        }],
                                        yAxes: [{
                                            display: false,
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: Math.max.apply(Math, ageGraph.map(function (o) { return parseInt(o); })) + 1
                                            }
                                        }],
                                    },


                                }}
                            />
                            <p style={{ fontWeight: "bold" }}>Age group</p>
                        </div>
                        <div className="mt-4">
                            <Bar
                                data={{
                                    labels: ['Indian', 'Chinese ', 'Malay', 'Others'],
                                    datasets: [
                                        {
                                            backgroundColor: '#F07321',
                                            barPercentage: 0.3,
                                            // enabled: false,
                                            data: raceGraph
                                        }
                                    ],
                                }}
                                // width={150}
                                // height={}
                                options={{
                                    plugins: {
                                        datalabels: {
                                            display: false
                                        },
                                    },
                                    legend: {
                                        display: false,
                                        // position: 'left'
                                    },
                                    tooltips: {
                                        enabled: false,
                                    },
                                    scales: {
                                        xAxes: [{
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                            },

                                        }],
                                        yAxes: [{
                                            display: false,
                                            gridLines: {
                                                display: false
                                            },
                                            ticks: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: Math.max.apply(Math, raceGraph.map(function (o) { return parseInt(o); })) + 1
                                            }
                                        }],
                                    },
                                }}
                            />
                            <p className="ml-3" style={{ fontWeight: "bold" }}>Racial demographic</p>
                        </div>
                    </div>

                    <div className="month-graph ml-5">
                        <HorizontalBar
                            data={{

                                labels: ['Jan', 'Feb', ' Mar', ' Apr', ' May', ' jun', ' july', ' Aug', ' Sep', ' Oct', ' Nov', ' Dec'],
                                // labelMaxWidth: 100,
                                datasets: [
                                    {
                                        backgroundColor: '#F07321',
                                        barPercentage: 0.7,
                                        data: birthdayGraph
                                    }
                                ],
                            }}
                            width={150}
                            height={232}
                            options={{
                                plugins: {
                                    datalabels: {
                                        display: false
                                    },
                                },
                                legend: {
                                    display: false,
                                    position: 'right'
                                },
                                // data: {
                                //     width: "20%"
                                // },
                                tooltips: {
                                    enabled: false,
                                },
                                scales: {

                                    xAxes: [{
                                        display: false,

                                        gridLines: {
                                            display: false
                                        },
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                        }
                                    }],
                                    yAxes: [{
                                        gridLines: {
                                            display: false
                                        },
                                        ticks: {
                                            beginAtZero: true,
                                            min: 0,
                                            max: Math.max.apply(Math, birthdayGraph.map(function (o) { return parseInt(o); })) + 1
                                        }
                                    }],
                                },


                            }}
                        />

                        <p style={{ fontWeight: "bold" }}>Birthday month</p>
                    </div>
                </div>
            </div>) : (isloading ? (<Loader className="text-center loader"
                type="Oval"
                color="#323A40"
                height={200}
                width={200}
            />) : (
                    <div className="col-5 mt-5 ">
                        <div className="row query-for-header">
                            <div className="col-1 back-arrow"><div onClick={this.back} className="back-btn-customer">&#8249;</div></div>
                            <div className="col-7 nameHead pl-2">{roll.customer.name}<p className="nameHead-age">{roll.customer.total_points} points</p></div>
                            <div className="col-3 nameHead-age">Age {roll.customer.age}<p>{roll.customer.gender}</p></div>
                        </div>

                        <div className="row heading-red">
                            <div className="col-md-3"><h6>Date</h6></div>
                            <div className="col-md-3 pl-4"><h6>Points</h6></div>
                            <div className="col-md-6 pl-3"><h6>In-store ratings</h6></div>
                        </div>

                        <div className="scrool">
                            <div style={{ width: "290px" }}>
                                {
                                    roll.details.map((redemp) => (
                                        <div className="color-for-bg-customer bg-redp-color ">

                                            <div className="row m-0">
                                                <div className="col-5 redep-inr">{redemp.created_at.split(" ")[0]}</div>
                                                {(redemp.redemption_type == "point") ? (<div className="col-2 redep-inr">{redemp.points}</div>) : (<div className="col-2 redep-inr text-danger">-{redemp.points}</div>)}
                                                {/* <div className="col-2 redep-inr">{redemp.points}</div> */}
                                                <div className=" col-5 redep-inr"><Rating className="pl-3"
                                                    name="half-rating-read"
                                                    defaultValue={redemp.rating}
                                                    precision={0.5}
                                                    size={"small"}
                                                    readOnly />
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                )
                )


        )
    }
}

export default withRouter(CustomerBase);