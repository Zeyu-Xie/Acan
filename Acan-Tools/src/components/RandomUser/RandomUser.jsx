import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"

import "./RandomUser.css"

import config from "../../config.json"

class RandomUser extends React.Component {

    state = {
        username: "",
        sex: "",
        address: "",
        name: "",
        email: "",
        birthday: ""
    }

    constructor(props) {
        super(props)
        this.getRandomUser = this.getRandomUser.bind(this)
    }

    componentDidMount() {
        this.getRandomUser()
    }

    render() {
        return (
            <div className="card flip-in-hor-bottom col-11" id="card-randomUser">
                <div className="row">
                    <div className="row col-4">
                        <img id="side-photo" src="https://s2.loli.net/2023/05/24/1PbaHkIGFSoBMvT.png" className="col-12" alt="Random User" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Random User 👩🏼‍💻</h5>
                            <hr />
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Username</th>
                                        <td>{this.state.username}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sex</th>
                                        <td>{this.state.sex}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Address</th>
                                        <td>{this.state.address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{this.state.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{this.state.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Birthday</th>
                                        <td>{this.state.birthday}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />
                            <button type="button" className="btn btn-outline-secondary col-12" onClick={this.getRandomUser}>Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    getRandomUser = () => {
        axios.get(`${config.urls["Acan Server"]}/tool/api/getRandomUser`).then(res => {
            this.setState(res.data)
        }).catch(err => {
            console.log("ERROR", err)
        })
    }
}

export default connect(null, loaded)(connect(null, loading)(RandomUser))