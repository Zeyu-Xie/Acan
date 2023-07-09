import React from "react"
import { connect } from "react-redux"
import download from "downloadjs"
import axios from "axios"
import switchDoc from "../../store/actions/switchDoc"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"
import config from "../../config.json"
import "./Navbar.css"

class Navbar extends React.Component {

    state = {
        list: null,
        searchText: ""
    }

    ref1 = React.createRef()
    ref2 = React.createRef()

    constructor(props) {
        super(props)
        this.getList = this.getList.bind(this)
        this.downloadDoc = this.downloadDoc.bind(this)
        this.rename = this.rename.bind(this)
        this.delete = this.delete.bind(this)
        this.download = this.download.bind(this)
        this.upload = this.upload.bind(this)
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        return (
            <nav id="top-nav" className="navbar navbar-expand-lg m-5">
                <div className="container-fluid">
                    <a id="top-nav-brand" className="navbar-brand" href="#" >Acan Docs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">

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
                        </ul> */}
                        <ul className="navbar-nav mw-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        (this.state.list) ? (this.state.list.map((item, index) => {
                                            return (
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => {
                                                        this.props.switchDoc(item.Key)
                                                    }}>{item.Key}
                                                    </a>
                                                </li>
                                            )
                                        })) : (null)
                                    }
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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


                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Upload
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="input-group" style={{ width: "max-content" }}>
                                            &nbsp;&nbsp;
                                            <input type="file" className="form-control" multiple ref={this.ref2} />
                                            <label className="input-group-text" onClick={this.upload}>Upload ⏫</label>
                                            &nbsp;&nbsp;
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div >
            </nav >
        )
    }
    loading() {
        this.props.loading()
    }

    loaded() {
        this.props.loaded()
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

    async downloadDoc() {
        this.loading()
        await axios.get(`${config.urls["Acan Server"]}/doc/content/downloadDoc?name=${this.props.docName}`).catch(err => {
            console.log("ERROR", err)
        })
        this.loaded()
    }

    async rename() {
        if (this.props.docName === "Self Introduction.html") {
            window.alert("Failed to rename because of the default settings.")
        }
        else {
            var str = prompt("Please enter new name")
            if (str !== null) {
                this.loading()
                await axios.get(`${config.urls["Acan Server"]}/doc/api/renameDoc?oldName=${this.props.docName}&newName=${str}`).then(res => {
                    this.setState({
                        docName: str
                    })
                    this.props.switchDoc(str)
                }).catch(err => {
                    console.log("ERROR", err)
                })
                this.loaded()
            }
        }

    }

    async delete() {
        if (this.props.docName === "Self Introduction.html") {
            window.alert("Failed to delete because of the default settings.")
        }
        else {
            const confirmed = window.confirm("Are you sure you want to delete this document?")
            if (confirmed) {
                this.loading()
                await axios.get(`${config.urls["Acan Server"]}/doc/api/deleteDoc?name=${this.props.docName}`).then(res => {
                    this.setState({
                        docName: "Self Introduction.html"
                    })
                    this.props.switchDoc("Self Introduction.html")
                })
                this.loaded()
            }
        }
    }

    download() {
        axios.get(`${config.urls["Acan Server"]}/doc/content/downloadDoc?name=${this.props.docName}`).then(res => {
            download(res.data, this.props.docName, "text/html")
        }).catch(err => {
            console.log("ERROR", err)
        })
    }

    async upload() {
        this.loading()
        for (var i = 0; i < this.ref2.current.files.length; i++) {
            var file = this.ref2.current.files[i]
            const formData = new FormData();
            formData.append("file", file);
            await axios.post(`${config.urls["Acan Server"]}/doc/api/uploadDoc`, formData).catch(err => {
                console.log("ERROR", err)
            })
        }
        this.loaded()
    }
}

const mapStateToProps = (state) => {
    return {
        docName: state.docName
    }
}

export default connect(mapStateToProps, loaded)(connect(null, loading)(connect(null, switchDoc)(Navbar)))