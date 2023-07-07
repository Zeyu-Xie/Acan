import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import Cookies from "js-cookie"

import "./Login.css"

import config from "../../../config.json"
import login from "../../../store/actions/login"
import switchStartFrom from "../../../store/actions/switchStartFrom"
import loading from "../../../store/actions/loading"
import loaded from "../../../store/actions/loaded"

class Login extends React.Component {

    username = React.createRef()
    password = React.createRef()
    btn_signUp = React.createRef()
    btn_submitLogin = React.createRef()

    constructor(props) {
        super(props)

        this.refresh = this.refresh.bind(this)
        this.onSubmitLogin = this.onSubmitLogin.bind(this)
    }

    componentDidMount() {
        this.btn_submitLogin.current.addEventListener("click", this.onSubmitLogin)
        this.btn_signUp.current.addEventListener("click", () => { this.props.switchStartFrom("SignUp") })
    }

    render() {
        return (
            <div id="login-card" className="card col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <div className="card-body">
                    <h5 className="card-title"> LOGIN 🔑 </h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Please input your username and password.👇</h6>
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
                    <p className="card-text">If you forget your password, contact <a href="xie.zeyu20@gmail.com">xie.zeyu20@gmail.com</a> 📮 for assistance. </p>
                    <a href="#" className="card-link" ref={this.btn_signUp}>Sign Up</a>
                    <a href="#" className="card-link" ref={this.btn_submitLogin}>Submit Login</a>
                </div>
            </div>
        )
    }

    refresh = () => {
        this.username.current.value = ""
        this.password.current.value = ""
    }

    onSubmitLogin = async () => {
        this.props.loading()
        const username = this.username.current.value
        const password = this.password.current.value

        if (username === "" || password === "") {
            this.props.loaded()
            window.alert("Please input your username and password.")
            this.refresh()
            return
        }

        await axios.get(`${config.urls["Acan-User-Server"]}/api/login?username=${username}&password=${password}`).then(res => {
            const token = res.data.token
            Cookies.set("token", token)
            Cookies.set("username", username)
            this.props.login(username)
            this.props.loaded()
            window.alert("Login successful.")
            this.props.switchStartFrom("Logined")
        }).catch(err => {
            this.props.loaded()
            window.alert("ERROR: " + err)
            this.refresh()
        })
    }
}

export default connect(null, loaded)(connect(null, loading)(connect(null, switchStartFrom)(connect(null, login)(Login))))