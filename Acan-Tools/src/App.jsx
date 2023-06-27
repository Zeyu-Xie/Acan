import React from "react"
import ReactDOM from "react-dom"

import Translate from "./components/Translate/Translate";
import RandomUser from "./components/RandomUser/RandomUser";
import RandomPassword from "./components/RandomPassword/RandomPassword";
import Md5 from "./components/Md5/Md5";
import Key from "./components/Key/Key";

import config from "./config.json"

import "./App.css"

class App extends React.Component {

    state = {
        toolList: [],
        toolName: "Translate",
        isLoading: false
    }

    constructor(props) {
        super(props)
        this.loading = this.loading.bind(this)
        this.loaded = this.loaded.bind(this)
        this.getList = this.getList.bind(this)
        this.refresh = this.refresh.bind(this)
        this.switchTool = this.switchTool.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <div className="container-fluid align-items-center" style={{ height: "100vh" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: "10" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Acan Tools</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href={config.urls["ACan-Server"]}><b>Home</b></a>
                                </li>
                                {
                                    (this.state.toolList) ? (
                                        this.state.toolList.map((item, index) => {
                                            return (
                                                <li className="nav-item" key={index}>
                                                    <a className="nav-link" href="#" onClick={() => {
                                                        this.switchTool(item)
                                                    }}>{item}</a>
                                                </li>
                                            )
                                        })
                                    ) : (null)

                                }
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                {
                    (this.state.toolName) ? (
                        (this.state.toolName === "Translate") ? (<Translate />) : null
                    ) : (null)
                }
                {
                    (this.state.toolName) ? (
                        (this.state.toolName === "RandomUser") ? (<RandomUser />) : null
                    ) : (null)
                }
                {
                    (this.state.toolName) ? (
                        (this.state.toolName === "RandomPassword") ? (<RandomPassword />) : null
                    ) : (null)
                }
                {
                    (this.state.toolName) ? (
                        (this.state.toolName === "Md5") ? (<Md5 />) : null
                    ) : (null)
                }
                {
                    (this.state.toolName) ? (
                        (this.state.toolName === "Key") ? (<Key />) : null
                    ) : (null)
                }
                {
                    this.state.isLoading ? (<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>) : null
                }
            </div>
        );
    }

    loading() {
        this.setState({
            isLoading: true
        })
    }

    loaded() {
        this.setState({
            isLoading: false
        })
    }

    getList() {
        this.loading()
        this.setState({
            toolList: config.others.toolList
        }, () => {
            this.loaded()
        })
    }

    refresh() {
        this.getList()
    }

    switchTool(toolName) {
        this.loading()
        this.setState({
            toolName: toolName
        }, () => {
            this.refresh()
            this.loaded()
        })
    }
}

export default App