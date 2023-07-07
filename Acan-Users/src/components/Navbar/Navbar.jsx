import React from "react"
import { connect } from "react-redux"

import switchOnDisplayName from "../../store/actions/switchOnDisplayName"

import "./Navbar.css"

class Navbar extends React.Component {

    btn_Start=React.createRef()
    btn_Settings=React.createRef()

    componentDidMount() {
        this.btn_Start.current.addEventListener("click", () => {
            this.props.switchOnDisplayName("Start")
        })
        this.btn_Settings.current.addEventListener("click", () => {
            this.props.switchOnDisplayName("Settings")
        })
    }

    render() {
        return (
            <nav id="top-nav" className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        Acan Users
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" ref={this.btn_Start}>Start 🎮 |</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" ref={this.btn_Settings}>Settings ⚙️ |</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(null, switchOnDisplayName)(Navbar)