import React from "react"
import axios from "axios"
import copy from "clipboard-copy"
import { connect } from "react-redux"

import config from "../../config.json"
import "./List.css"

import Preview from "../Preview/Preview"

import preview from "../../store/actions/preview"

class List extends React.Component {

    state = {
        list: [],
        imageName: "",
        isLoading: false
    }

    ref1 = React.createRef()
    ref2 = React.createRef()
    ref3 = React.createRef()
    ref4 = React.createRef()
    ref5 = React.createRef()

    constructor(props) {
        super(props)
        this.getList = this.getList.bind(this)
        this.rename = this.rename.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return (
            <div className="row justify-content-center">
                <ul id="navbar">
                    <li>
                        <div title="Home" className="shake-chunk" onClick={() => { window.location.href = `${config.urls["Acan Server"]}/page/home` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div title="Doc" className="shake-chunk" onClick={() => { window.location.href = `${config.urls["Acan Server"]}/page/doc` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                        </div>

                    </li>
                    <li>
                        <div title="Photo" className="shake-chunk" onClick={() => { window.location.href = "#" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
                            </svg>
                        </div>

                    </li>
                    <li>
                        <div title="Tool" className="shake-chunk" onClick={() => { window.location.href = `${config.urls["Acan Server"]}/page/tool` }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                                <path d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61Z" />
                                <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376ZM3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                        </div>
                    </li>
                </ul>
                <div className="card col-11 col-lg-10">
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Modified Time (GMT)</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Options</th>
                                    <th scope="col">
                                        <select className="form-select form-select-sm" aria-label="Default select example" title="Sort Order" ref={this.ref3} onChange={this.getList}>
                                            <option disabled selected>Sort Order</option>
                                            <option>Name</option>
                                            <option>Date</option>
                                            <option>Size</option>
                                        </select>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map(item => {
                                        return (
                                            <tr style={{ verticalAlign: "middle" }}>
                                                <td>{item.Key}</td>
                                                <td>{item.LastModified}</td>
                                                <td>{item.size}</td>
                                                <td>
                                                    <button className="btn btn-outline-success btn-sm my-2" title="view" onClick={() => {
                                                        this.preview(item)
                                                    }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                        </svg>
                                                    </button>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <a className="btn btn-outline-success btn-sm my-2" href={`${config.urls["Acan Server"]}/photo/api/downloadPhoto?name=${item.Key}`} title="Download">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                                        </svg>
                                                    </a>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-outline-success btn-sm my-2" onClick={() => {
                                                        this.rename(item.Key)
                                                    }} title="Rename">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                    </button>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-outline-success btn-sm my-2" onClick={() => { copy(`${config.urls["Acan Server"]}/photo/api/downloadPhoto?name=${item.Key}`) }} title="Copy Link">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-clipboard-plus" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
                                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                                        </svg>
                                                    </button>

                                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button className="btn btn-outline-danger btn-sm my-2" onClick={() => { this.delete(item.Key) }} title="Delete">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                        </svg>
                                                    </button>

                                                </td>
                                                <td></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="input-group mb-3">
                            <input type="file" className="form-control" ref={this.ref2} multiple />
                            <label className="input-group-text" onClick={() => { this.upload() }}>Upload ⏫</label>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Input your target URL and select the file type" ref={this.ref4} />
                            <select className="form-select form-select-sm" aria-label="Default select example" title="Sort Order" ref={this.ref5}>
                                <option selected>AUTO</option>
                                <hr className="dropdown-divider" />
                                <option>JPEG</option>
                                <option>PNG</option>
                                <option>GIF</option>
                                <option>WEBP</option>
                                <option>TIFF</option>
                                <option>BMP</option>
                                <option>ICO</option>
                                <option>SVG</option>
                                <option>PSD</option>
                                <option>AI</option>
                                <option>EPS</option>
                            </select>
                            <label className="input-group-text" onClick={() => { this.import() }}>Import ↩️</label>
                        </div>

                        <button className="btn btn-outline-success" onClick={() => { this.refresh() }}>Refresh</button>
                    </div>

                </div>
                {
                    this.props.isPreview ? <Preview imageName={this.state.imageName} /> : null
                }
                {
                    this.state.isLoading ? (<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>) : null
                }
            </div>

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
        await axios.get(`${config.urls["Acan Server"]}/photo/api/getList`).then(res => {
            this.setState({
                list: res.data.data
            }, () => {
                switch (this.ref3.current.value) {
                    case "Name": {
                        this.setState({ list: this.state.list.sort(this.sortByName) })
                        break
                    }
                    case "Date": {
                        this.setState({ list: this.state.list.sort(this.sortByDate) })
                        break
                    }
                    case "Size": {
                        this.setState({ list: this.state.list.sort(this.sortBySize) })
                        break
                    }
                    default: {
                        break
                    }
                }
            })
        }).catch(err => {
            console.log("ERROR", err)
        })
        this.loaded()
    }

    async refresh() {
        this.loading()
        await this.getList()
        this.ref2.current.value = ""
        this.ref4.current.value = ""
        this.loaded()
    }

    async rename(name) {
        var str = prompt("Please input the new name below 👇");
        if (str !== null) {
            this.loading()
            await axios.get(`${config.urls["Acan Server"]}/photo/api/renamePhoto?oldName=${name}&newName=${str}`)
                .catch(err => {
                    console.log("ERROR", err)
                })
            await this.refresh()
            this.loaded()
        }
    }

    async upload() {
        this.loading()
        for (var i = 0; i < this.ref2.current.files.length; i++) {
            var file = this.ref2.current.files[i]
            const formData = new FormData();
            formData.append("file", file);
            await axios.post(`${config.urls["Acan Server"]}/photo/api/uploadPhoto`, formData).catch(err => {
                console.log("ERROR", err)
            })
            await this.refresh()
        }
        this.loaded()
    }

    async delete(name) {
        const confirmed = window.confirm("Are you sure you want to delete this photo? 🤔")

        if (confirmed) {
            this.loading()
            await axios.get(`${config.urls["Acan Server"]}/photo/api/deletePhoto?name=${name}`).catch(err => {
                console.log("ERROR", err);
            })
            await this.refresh()
            this.loaded()
        }
    }

    async import() {
        this.loading()
        await axios.post(`${config.urls["Acan Server"]}/photo/api/importPhoto?type=${this.ref5.current.value.toLowerCase()}`, { url: this.ref4.current.value }).catch(err => {
            console.log("ERROR", err)
        })
        await this.refresh()
        this.loaded()
    }

    async preview(item) {
        this.loading()
        this.setState({
            imageName: item.Key
        })
        this.props.preview(this.state.list)
        this.loaded()
    }

    sortByName = (a, b) => {
        if (a.Key < b.Key) {
            return -1;
        }
        if (a.Key > b.Key) {
            return 1;
        }
        return 0;
    }

    sortByDate = (a, b) => {
        if (a.LastModified < b.LastModified) {
            return -1;
        }
        if (a.LastModified > b.LastModified) {
            return 1;
        }
        return 0;
    }

    sortBySize = (a, b) => {
        const sizeA = parseInt(a.Size);
        const sizeB = parseInt(b.Size);

        if (sizeA < sizeB) {
            return -1;
        }
        if (sizeA > sizeB) {
            return 1;
        }
        return 0;
    }


}

const mapStateToProps = (state) => {
    return {
        isPreview: state.isPreview
    }
}

export default connect(mapStateToProps, preview)(List)