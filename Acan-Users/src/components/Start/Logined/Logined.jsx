import React from "react"
import { connect } from "react-redux"
import Cookies from "js-cookie"

import "./Logined.css"

import switchStartFrom from "../../../store/actions/switchStartFrom"
import loading from "../../../store/actions/loading"
import loaded from "../../../store/actions/loaded"

class Logined extends React.Component {

    btn_logout = React.createRef()

    constructor(props) {
        super(props)
        this.getUsername = this.getUsername.bind(this)
        this.getToken = this.getToken.bind(this)
        this.onSubmitLogOut = this.onSubmitLogOut.bind(this)
    }

    componentDidMount() {
        this.btn_logout.current.addEventListener("click", this.onSubmitLogOut)
    }

    render() {
        return (
            <div id="logined-card" className="card col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="card-body">
                    <h5 className="card-title"> Welcome to Acan User 👏 </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">You are successfully logined to Acan User.👇</h6>
                    <br />
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Username</span>
                        <input type="text" className="form-control" placeholder="Your username" aria-label="username" aria-describedby="basic-addon2" defaultValue={this.getUsername()} readOnly/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Token</span>
                        <input type="text" className="form-control" placeholder="Your password" aria-label="password" aria-describedby="basic-addon2" defaultValue={this.getToken()} readOnly/>
                    </div>
                    <br />
                    <p className="card-text">This page is read-only. 🔒 To operate please move to other sections. Also, Feel free to contact <a href="xie.zeyu20@gmail.com">xie.zeyu20@gmail.com</a> 📮 for assistance. </p>
                    <a href="#" className="card-link" ref={this.btn_logout}>Logout</a>
                </div>
            </div>
        )
    }

    getUsername = () => {
        return Cookies.get("username")
    }

    getToken = () => {
        return Cookies.get("token")
    }

    onSubmitLogOut = () => {
        const res = window.confirm("Are you sure you want to logout?")
        if (res) {
            window.alert("Logout successful.")
            Cookies.remove("token")
            Cookies.remove("username")
            this.props.switchStartFrom("Login")
        }
    }
}

export default connect(null, loaded)(connect(null, loading)(connect(null, switchStartFrom)(Logined)))