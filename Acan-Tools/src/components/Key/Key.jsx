import React from "react"
import axios from "axios"
import ClipboardJS from "clipboard"
import { connect } from "react-redux"

import config from "../../config.json"

import "./Key.css"

class Key extends React.Component {

    state = {
        loading_visibility: "hidden",
        publicKey: "",
        privateKey: "",
        copy_btn1_visibility: "hidden",
        copy_btn2_visibility: "hidden"
    }

    copy_btn1 = React.createRef()
    copy_btn2 = React.createRef()

    componentDidMount() {
        this.clipboard = new ClipboardJS(this.copy_btn1.current, {
            text: () => this.state.publicKey
        })

        this.clipboard = new ClipboardJS(this.copy_btn2.current, {
            text: () => this.state.privateKey
        })
    }

    render() {
        return (
            <div className="card flip-in-hor-bottom col-11" id="id5">
                <div className="card-body">
                    <div className="row justify-content-between align-items-center">
                        <h5 className="card-title col-6 m-0">Key Generator 🔑</h5>
                        <div className="spinner-border text-success col-6" role="status" style={{ display: "inline-block", visibility: `${this.state.loading_visibility}` }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-outline-success m-3" onClick={() => {
                        this.getKeyPair("rsa")
                    }}>RSA</button>
                    <button className="btn btn-outline-success m-3" onClick={() => {
                        this.getKeyPair("ecc")
                    }}>ECC</button>
                    <button className="btn btn-outline-success m-3" onClick={() => {
                        this.getKeyPair("dsa")
                    }}>DSA</button>
                    <button className="btn btn-outline-success m-3" onClick={() => {
                        this.getKeyPair("ed25519")
                    }}>ED25519</button>
                    <hr />
                    <p className="card-text"><b>Public Key: </b><button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn1} style={{ visibility: this.state.copy_btn1_visibility, float: "right" }}>Copy</button></p>
                    <p className="card-text" style={{ maxHeight: "4rem", overflow: "scroll" }}>{this.state.publicKey}  <br /> </p>
                    <p className="card-text"><b>Private Key: </b><button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn2} style={{ visibility: this.state.copy_btn2_visibility, float: "right" }}>Copy</button></p>
                    <p className="card-text" style={{ maxHeight: "4rem", overflow: "scroll" }}>{this.state.privateKey}  <br /> </p>
                </div>
            </div>
        )
    }

    getKeyPair = async (str) => {
        this.setState({
            loading_visibility: "visible"
        })
        await axios.get(`${config.urls["Acan Server"]}/tool/api/getKeyPair?encryptionType=${str}`).then(res => {
            this.setState({
                publicKey: res.data.publicKey,
                privateKey: res.data.privateKey,
                copy_btn1_visibility: "visible",
                copy_btn2_visibility: "visible"
            })
        }).catch(err => {
            console.log("ERROR", err)
        })
        this.setState({
            loading_visibility: "hidden"
        })
    }
}

export default connect(null, loaded)(connect(null, loading)(Key))