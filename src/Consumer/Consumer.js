
import React, { Component } from 'react';
import './Consumer.scss'
import { Link } from 'react-router-dom'
import DummyData from '../DummyData';
import { getAllConsumer, logOut } from '../Services/Services';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



class Consumer extends Component {
    constructor() {
        super()
        this.state = {
            // data: DummyData,
            isLoading: true,
            toggleSortOrder: false
        }
    }

    componentDidMount() {

        getAllConsumer().then((res) => {
            this.setState({
                isLoading: false,
                data: res.data
            })
            if (res.message == "Unauthenticated.") {
                logOut();
            }
            else {
                this.setState({ data: res.data })
            }
        })
    }

    sortTable = (type) => {
        switch (type) {
            case 'AZ':
                this.sortByAZ();
                break;
            case 'MOST_RECENT':
                this.sortByMostRecent();
                break;
            case 'hightest':
                this.sortByHighest();
                break;
            case 'lowest':
                this.sortByLowest();
                break;
            default:
                this.sortByAZ();
        }
    }

    sortByAZ() {
        let sortedData = this.state.data;
        // Descending
        // console.log('DESC', sortedData);
        sortedData.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0
        })

        // } else {
        //     console.log('ASC');
        //     sortedData.sort((a, b) => { // Ascending
        //         if (a.Name < b.Name) {
        //             return 1;
        //         }
        //         if (a.Name > b.Name) {
        //             return -1;
        //         }
        //         return 0
        //     });
        // }

        // this.setState(prevState => { data: sortedData, toggleSortOrder: !prevState.toggleSortOrder });
        this.setState(prevState => {
            return {
                data: sortedData,
                toggleSortOrder: !prevState.toggleSortOrder
            }
        });
    }

    // sortByDescending() {
    //     let sortedData = [...DummyData];
    //     sortedData.sort((a, b) => {
    //         if (a.Name < b.Name) {
    //             return -1;
    //         }
    //         if (a.Name > b.Name) {
    //             return 1;
    //         }
    //         return 0
    //     });
    //     // this.setState(prevState => { data: sortedData, toggleSortOrder: !prevState.toggleSortOrder });
    //     this.setState(prevState => {
    //         return {
    //             data: sortedData,
    //             toggleSortOrder: !prevState.toggleSortOrder
    //         }
    //     });
    // }

    sortByMostRecent() {
        let sortedData = this.state.data;
        // console.log('sortedData');
        sortedData.sort(function (a, b) {
            var c = new Date(a.last_active);
            var d = new Date(b.last_active);
            return c - d;
        });

        this.setState(prevState => {
            return {
                data: sortedData,
                toggleSortOrder: !prevState.toggleSortOrder
            }
        });

    }

    sortByHighest() {
        let sortedData = this.state.data;
        // console.log('sortedDataheight');
        sortedData.sort((a, b) => {
            if (parseInt(a.total_points) < parseInt(b.total_points)) {
                return 1;
            }
            if (parseInt(a.total_points) > parseInt(b.total_points)) {
                return -1;
            }
            return 0
        });

        this.setState(prevState => {
            return {
                data: sortedData,
                toggleSortOrder: !prevState.toggleSortOrder
            }
        });
    }
    sortByLowest() {
        let sortedData = this.state.data;
        // console.log('sortedDataheight');
        sortedData.sort((a, b) => {
            if (parseInt(a.total_points) < parseInt(b.total_points)) {
                return -1;
            }
            if (parseInt(a.total_points) > parseInt(b.total_points)) {
                return 1;
            }
            return 0
        });
        this.setState(prevState => {
            return {
                data: sortedData,
                toggleSortOrder: !prevState.toggleSortOrder
            }
        });
    }

    render() {
        // const {data,isLoading}  = this.state
        const { data, isLoading } = this.state
        console.log("jejejejejej", data)
        return (
            isLoading ? (<Loader className="text-center loader"
                type="Oval"
                color="#323A40"
                height={200}
                width={200}
            />) : (
                    <div className="row pl-4" style={{ width: "97%" }}>
                        <div className="col-12">
                            <div className="for-consumer-pad">
                                <div className="consumer-main-div ">
                                    <div className="header-text">
                                        <h4 style={{ fontWeight: "bold" }}>Consumer</h4>
                                        <span className="label-background sort-label-mrg" onClick={() => this.sortTable('hightest')}>Highest</span>
                                        <span className="label-background" onClick={() => this.sortTable('lowest')}>Lowest</span>
                                        <span onClick={() => this.sortTable('AZ')}>A-Z</span>
                                        <span onClick={() => this.sortTable('MOST_RECENT')}>Most recent</span>
                                    </div>

                                    <table class="table table-borderless consumer-table" id="tbl">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Gender</th>
                                                <th>Age</th>
                                                <th>Race</th>
                                                <th>Mobile</th>
                                                <th>Total points (all loyalty accounts)</th>
                                                <th>Last active</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((row, i) => (
                                                    <tr className="table-color1" key={i} >
                                                        <td style={{ width: "15%" }} className="radius-left tbl-pad"><Link style={{ textDecoration: "none", color: "white" }} to={{ pathname: `consumer/bizconsumer/${row.id}`, state: { row } }}> {row.name} </Link></td>
                                                        <td style={{ width: "10%" }} className="tbl-pad">{row.gender}</td>
                                                        <td style={{ width: "8%" }} className="tbl-pad">{row.age}</td>
                                                        <td style={{ width: "10%" }} className="tbl-pad">{row.race}</td>
                                                        <td style={{ width: "18%" }} className="tbl-pad">{row.mobile}</td>
                                                        <td className="tbl-pad">{row.total_points}</td>
                                                        <td className="radius-right tbl-pad">{row.last_active}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-11"></div> */}
                    </div>

                )
        )
    }
}



export default Consumer;