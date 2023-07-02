import React from "react"
import ReactDOM from "react-dom"

import Translate from "./components/Translate/Translate";
import RandomUser from "./components/RandomUser/RandomUser";
import RandomPassword from "./components/RandomPassword/RandomPassword";
import Md5 from "./components/Md5/Md5";
import Key from "./components/Key/Key";

import config from "./config.json"

import "./App.css"
import Navbar from "./components/Navbar/Navbar";

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
                <Navbar />
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