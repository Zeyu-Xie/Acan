import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import download from "downloadjs"

import config from "../../config.json"

import "./Preview.css"

class Preview extends React.Component {

    state = {
        list: null,
        docName: "Self Introduction.html",
        content: "",
        searchText: "",
        isLoading: false
    }

    ref1 = React.createRef()
    ref2 = React.createRef()
    ref3= React.createRef()

    constructor(props) {
        super(props)
        this.refresh = this.refresh.bind(this)
        this.rename = this.rename.bind(this)
        this.delete = this.delete.bind(this)
        this.download = this.download.bind(this)
        this.upload = this.upload.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <div id="div1">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand align-items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost">Home</a>
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
                                                <input type="file" className="form-control" multiple ref={this.ref3}/>
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

                <div id="div2">
                    <div className="container" ref={this.ref1}>
                        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                    </div>
                </div>

                {
                    this.state.isLoading ? (<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>) : null
                }
            </div >
        )
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

    async getList() {
        this.loading()
        await axios(`${config.urls["Acan Server"]}/doc/api/getList`).then(res => {
            this.setState({
                list: res.data.Contents
            })
        }).catch(err => {
            console.log("ERROR", err)
        })
        this.loaded()
    }

    async getDoc() {
        this.loading()
        await axios.get(`${config.urls["Acan Server"]}/doc/content/getDoc?name=${this.state.docName}`).then(res => {
            this.setState({
                content: res.data.data
            })
        })
        this.loaded()
    }

    async downloadDoc() {
        this.loading()
        await axios.get(`${config.urls["Acan Server"]}/doc/content/downloadDoc?name=${this.state.docName}`).catch(err => {
            console.log("ERROR", err)
        })
        this.loaded()
    }

    async refresh() {
        await this.getList()
        await this.getDoc()
        this.setState({
            searchText: ""
        })
        this.ref2.current.value = ""
    }

    async rename() {
        if (this.state.docName === "Self Introduction.html") {
            window.alert("Failed to rename because of the default settings.")
        }
        else {
            var str = prompt("Please enter new name")
            if (str !== null) {
                this.loading()
                await axios.get(`${config.urls["Acan Server"]}/doc/api/renameDoc?oldName=${this.state.docName}&newName=${str}`).then(res => {
                    this.setState({
                        docName: str
                    })
                }).catch(err => {
                    console.log("ERROR", err)
                })
                this.loaded()
                await this.refresh()
            }
        }

    }

    async delete() {
        if (this.state.docName === "Self Introduction.html") {
            window.alert("Failed to delete because of the default settings.")
        }
        else {
            const confirmed = window.confirm("Are you sure you want to delete this document?")
            if (confirmed) {
                await axios.get(`${config.urls["Acan Server"]}/doc/api/deleteDoc?name=${this.state.docName}`).then(res => {
                    this.setState({
                        docName: "Self Introduction.html"
                    })
                    this.refresh()
                })
            }
        }
    }

    download() {
        axios.get(`${config.urls["Acan Server"]}/doc/content/downloadDoc?name=${this.state.docName}`).then(res => {
            download(res.data, this.state.docName, "text/html")
        }).catch(err => {
            console.log("ERROR", err)
        })
    }

    async upload() {
        this.loading()
        console.log(this.ref3.current.files)
        for (var i = 0; i < this.ref3.current.files.length; i++) {
            var file = this.ref3.current.files[i]
            const formData = new FormData();
            formData.append("file", file);
            await axios.post(`${config.urls["Acan Server"]}/doc/api/uploadDoc`, formData).catch(err => {
                console.log("ERROR", err)
            })
            await this.refresh()
        }
        this.loaded()
    }
}

export default Preview