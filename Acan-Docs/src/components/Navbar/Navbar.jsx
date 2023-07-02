import React from "react"

import config from "../../config.json"

import "./Navbar.css"

class Navbar extends React.Component {

    state = {
        list: null,
        docName: "Self Introduction.html",
        content: "",
        searchText: "",
        isLoading: false
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand mx-4 py-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/home`}>Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/doc`}>Docs</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/photo`}>Photos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/tool`}>Tools</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        (this.state.list) ? (this.state.list.map((item, index) => {
                                            return (
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => {
                                                        this.setState({
                                                            docName: item.Key,
                                                        }, () => {
                                                            this.refresh()
                                                        })
                                                    }}>{item.Key}
                                                    </a>
                                                </li>
                                            )
                                        })) : (null)
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Options
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={this.download}>Download</a>
                                        <a className="dropdown-item" href="#" onClick={this.rename}>Rename</a>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item" href="#" onClick={this.delete} style={{ color: "red" }}>Delete</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <ul className="dropdown-menu">
                                    {
                                        (this.state.list) ? (this.state.list.map((item, index) => {
                                            return (
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => {
                                                        this.setState({
                                                            docName: item.Key,
                                                        }, () => {
                                                            this.refresh()
                                                        })
                                                    }}>{item.Key}
                                                    </a>
                                                </li>
                                            )
                                        })) : (null)
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Upload
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="input-group" style={{ width: "max-content" }}>
                                            &nbsp;&nbsp;
                                            <input type="file" className="form-control" multiple ref={this.ref3} />
                                            <label className="input-group-text" onClick={this.upload}>Upload ⏫</label>
                                            &nbsp;&nbsp;
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" ref={this.ref2} onChange={() => {
                                this.setState({
                                    searchText: this.ref2.current.value
                                })
                            }} />
                            <div className="dropdown">
                                <button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    {
                                        (this.state.list) ? (
                                            this.state.list.map((item, index) => {
                                                if (item.Key.toLowerCase().includes(this.state.searchText.toLowerCase()))
                                                    return (
                                                        <li>
                                                            <a className="dropdown-item" href="#" onClick={() => {
                                                                this.setState({
                                                                    docName: item.Key,
                                                                }, () => {
                                                                    this.refresh()
                                                                })
                                                            }}>{item.Key}</a>
                                                        </li>
                                                    )
                                                else
                                                    return null
                                            })
                                        ) : (null)
                                    }
                                </ul>
                            </div>
                        </form>
                    </div>
                </div >
            </nav >
        )
    }
}