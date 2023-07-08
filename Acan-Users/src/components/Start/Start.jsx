import React from "react"
import Cookies from "js-cookie"
import axios from "axios"

import "./Start.css"

import config from "../../config.json"

import { connect } from "react-redux"

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"
import Logined from "./Logined/Logined"
import switchStartFrom from "../../store/actions/switchStartFrom"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"

class Start extends React.Component {

    async componentDidMount() {
        const username = Cookies.get("username")
        const token = Cookies.get("token")
        if (!username || !token) {
            this.props.switchStartFrom("Login")
            return
        }
        this.props.loading()
        await axios.get(`${config.urls["Acan-User-Server"]}/api/getAccountStatus?username=${username}`,{
            headers: {
                token: token
            }
        }).then(res => {
            this.props.switchStartFrom("Logined")
        }).catch(err => {
            this.props.switchStartFrom("Login")
        })
        this.props.loaded()
    }

    render() {
        return (
            <div>
                {
                    this.props.startFrom === "Login" ? <Login /> : null
                }
                {
                    this.props.startFrom === "SignUp" ? <SignUp /> : null
                }
                {
                    this.props.startFrom === "Logined" ? <Logined /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        onDisplayName: state.onDisplayName,
        username: state.username,
        startFrom: state.startFrom,
    }
}

export default connect(mapStateToProps, switchStartFrom)(connect(null, loading)(connect(null, loaded)(Start)))