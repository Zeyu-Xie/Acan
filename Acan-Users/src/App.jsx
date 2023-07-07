import React from "react"

import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Start from "./components/Start/Start"
import Settings from "./components/Settings/Settings"
import { connect } from "react-redux"
import SpinnerBorder from "./components/SpinnerBorder/SpinnerBorder"

class App extends React.Component {
    render() {
        return (
            <div id="all" className="container-fluid">
                <Navbar />
                {
                    this.props.onDisplayName === "Start" ? <Start /> : null
                }
                {
                    this.props.onDisplayName === "Settings" ? <Settings /> : null
                }
                <SpinnerBorder />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        onDisplayName: state.onDisplayName
    }
}

export default connect(mapStateToProps)(App)