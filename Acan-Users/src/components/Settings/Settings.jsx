import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import Cookies from "js-cookie"

import "./Settings.css"

import config from "../../config.json"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"
import switchOnDisplayName from "../../store/actions/switchOnDisplayName"
class Settings extends React.Component {

    btn_backToStart = React.createRef()
    input_password = React.createRef()
    btn_cancelResetPassword = React.createRef()
    btn_submitResetPassword = React.createRef()
    btn_deleteAccount = React.createRef()

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.btn_backToStart.current.addEventListener("click", () => {
            this.props.switchOnDisplayName("Start")
        })
        this.btn_cancelResetPassword.current.addEventListener("click", () => {
            this.input_password.current.value = ""
        })
        this.btn_submitResetPassword.current.addEventListener("click", async () => {
            this.props.loading()
            const username = Cookies.get("username")
            const password = this.input_password.current.value
            const token = Cookies.get("token")

            if(!password) {
                window.alert("Please enter your new password first. ⚠️")
                this.props.loaded()
                return
            }

            await axios.get(`${config.urls["Acan-User-Server"]}/api/resetPassword?username=${username}&newPassword=${password}`, {
                headers: {
                    token: token
                }
            }).then(res => {
                window.alert("Your password has been reset. 🎉")
                this.input_password.current.value = ""
                this.props.loaded()
            }).catch(err => {
                console.log("ERROR", err)
                window.alert("Failed to reset your password. ⚠️")
                this.props.loaded()
            })
            this.btn_deleteAccount.current.addEventListener("click", async () => {
                this.props.loading()
                const password = window.prompt("Please enter your password to confirm your identity. 👇")
                const username = Cookies.get("username")
                const token = Cookies.get("token")
                await axios.get(`${config.urls["Acan-User-Server"]}/api/deleteAccount?username=${username}&password=${password}`, {
                    headers: {
                        token: token
                    }
                }).then(res => {
                    Cookies.remove("username")
                    Cookies.remove("token")
                    window.alert("Your account has been deleted. 🗑️")
                    this.props.loaded()
                    this.props.switchOnDisplayName("Start")
                }).catch(err => {
                    console.log("ERROR", err)
                    window.alert("Failed to delete your account. ⚠️ Please check your password and try again. 🤷")
                    this.props.loaded()
                })
            })
        })
    }
    render() {
        return (
            <div id="settings" className="card col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-5" >
                <div className="card-body">
                    <h5 className="card-title"> Settings ⚙️ </h5>
                    <br />

                    <h6 className="card-subtitle mb-2 text-body-secondary">- Reset your Password here. 👇</h6>
                    <br />
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Username</span>
                        <input type="text" className="form-control" placeholder={Cookies.get("username") + " (You cannot change your username here ⚠️)"} aria-label="username" aria-describedby="basic-addon2" readOnly />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">Password</span>
                        <input type="text" className="form-control" placeholder="Your new password" aria-label="password" aria-describedby="basic-addon2" ref={this.input_password} />
                    </div>
                    <br />
                    <a href="#" className="card-link" ref={this.btn_cancelResetPassword}>Cancel</a>
                    <a href="#" className="card-link" ref={this.btn_submitResetPassword}>Submit Password Change</a>
                    <br />
                    <br />

                    <h6 className="card-subtitle mb-2 text-body-secondary">- Due to safety reasons, if you need to reset your username, please email to <a href="xie.zeyu20@gmail.com">xie.zeyu20@gmail.com</a> 📮 for permission. </h6>
                    <br />

                    <h6 className="card-subtitle mb-2 text-body-secondary">- Delete your account here. 👇</h6>
                    <br />
                    <a id="btn-delete-account" href="#" className="card-link" ref={this.btn_deleteAccount}>Delete My Account ⚠️</a>
                    <br />
                    <br />

                    <h6 className="card-subtitle mb-2 text-body-secondary">- Finished everything? Click here to go back. 👇</h6>
                    <br />
                    <a href="#" className="card-link" ref={this.btn_backToStart}>Back To Start</a>
                </div>
            </div>
        )
    }
}

export default connect(null, loaded)(connect(null, loading)(connect(null, switchOnDisplayName)(Settings)))