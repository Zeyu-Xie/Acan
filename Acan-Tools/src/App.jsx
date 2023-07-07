import React from "react"

import Translate from "./components/Translate/Translate";
import RandomUser from "./components/RandomUser/RandomUser";
import RandomPassword from "./components/RandomPassword/RandomPassword";
import Md5 from "./components/Md5/Md5";
import Key from "./components/Key/Key";
import Weather from "./components/Weather/Weather";

import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import { connect } from "react-redux";
import loaded from "./store/actions/loaded";
import loading from "./store/actions/loading";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.loading = this.loading.bind(this)
        this.loaded = this.loaded.bind(this)
    }

    render() {
        return (
            <div className="container-fluid" style={{ height: "100vh" }}>
                <Navbar />
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "Translate") ? (<Translate />) : null
                    ) : (null)
                }
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "RandomUser") ? (<RandomUser />) : null
                    ) : (null)
                }
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "RandomPassword") ? (<RandomPassword />) : null
                    ) : (null)
                }
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "Md5") ? (<Md5 />) : null
                    ) : (null)
                }
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "Key") ? (<Key />) : null
                    ) : (null)
                }
                {
                    (this.props.toolName) ? (
                        (this.props.toolName === "Weather") ? (<Weather />) : null
                    ) : null
                }
                {
                    this.props.isLoading ? (<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>) : null
                }
            </div>
        );
    }

    loading() {
        this.props.loading()
    }

    loaded() {
        this.props.loaded()
    }
}

const mapStateToProps = (state) => {
    return {
        toolName: state.toolName,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, loaded)(connect(null, loading)(App))