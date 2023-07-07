import React from "react"

import "./Start.css"

import { connect } from "react-redux"

import Login from "./Login/Login"
import SignUp from "./SignUp/SignUp"
import Logined from "./Logined/Logined"
import SpinnerBorder from "../SpinnerBorder/SpinnerBorder"

class Start extends React.Component {
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

export default connect(mapStateToProps)(Start)