import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import Cookies from "js-cookie"

import "./SignUp.css"

import config from "../../../config.json"
import login from "../../../store/actions/login"
import switchStartFrom from "../../../store/actions/switchStartFrom"
import loading from "../../../store/actions/loading"
import loaded from "../../../store/actions/loaded"

class SignUp extends React.Component {

    username = React.createRef()
    password = React.createRef()
    btn_login = React.createRef()
    btn_submitSignUp = React.createRef()

    constructor(props) {
        super(props)

        this.refresh = this.refresh.bind(this)
        this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
    }

    componentDidMount() {
        this.btn_submitSignUp.current.addEventListener("click", this.onSubmitSignUp)
        this.btn_login.current.addEventListener("click", () => { this.props.switchStartFrom("Login") })
    }

    render() {
        return (
            <div id="signUp-card" className="card col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="card-body">
                    <h5 className="card-title"> SIGNUP 🙋 </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Please decide your username and password.👇</h6>
                    <br />
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Username</span>
                        <input type="text" className="form-control" placeholder="Your username" aria-label="username" aria-describedby="basic-addon2" ref={this.username} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Password</span>
                        <input type="text" className="form-control" placeholder="Your password" aria-label="password" aria-describedby="basic-addon2" ref={this.password} />
                    </div>
                    <br />
                    <p className="card-text">Your username should be different from others. Feel free to contact <a href="xie.zeyu20@gmail.com">xie.zeyu20@gmail.com</a> 📮 for assistance. </p>
                    <a href="#" className="card-link" ref={this.btn_login}>Login</a>
                    <a href="#" className="card-link" ref={this.btn_submitSignUp}>Submit SignUp</a>
                </div>
            </div>
        )
    }

    refresh = () => {
        this.username.current.value = ""
        this.password.current.value = ""
    }

    onSubmitSignUp = async () => {
        this.props.loading()
        const username = this.username.current.value
        const password = this.password.current.value

        if (username === "" || password === "") {
            this.props.loaded()
            window.alert("Username or password cannot be empty.")
            this.refresh()
            return
        }

        await axios.get(`${config.urls["Acan-User-Server"]}/api/signUp?username=${username}&password=${password}`).then(res => {
            this.props.loaded()
            window.alert("Sign up successful.")
            this.props.switchStartFrom("Login")
        }).catch(err => {
            this.props.loaded()
            window.alert("ERROR: " + err)
            this.refresh()
        })
    }
}

export default connect(null, loaded)(connect(null, loading)(connect(null, switchStartFrom)(connect(null, login)(SignUp))))