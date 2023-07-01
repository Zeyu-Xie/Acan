import React from "react"
import axios from "axios"
import ClipboardJS from "clipboard"

import config from "../../config.json"

import "./Md5.css"

class Md5 extends React.Component {

    state = {
        o_32: "",
        o_16: "",
        copy_btn1_visibility: "hidden",
        copy_btn2_visibility: "hidden"
    }

    q = React.createRef()
    copy_btn1 = React.createRef()
    copy_btn2 = React.createRef()

    componentDidMount() {
        this.clipboard = new ClipboardJS(this.copy_btn1.current, {
            text: () => this.state.o_32
        })

        this.clipboard = new ClipboardJS(this.copy_btn2.current, {
            text: () => this.state.o_16
        })
    }

    render() {
        return (
            <div className="card flip-in-hor-bottom flip-in-hor-bottom col-sm-9 col-md-6 col-lg-5 col-xl-4 col-11" id="id4">
                <div className="card-body">
                    <h5 className="card-title">String to MD5 🔢</h5>
                    <hr />
                    <div className="input-group">
                        <span className="input-group-text">Source String</span>
                        <textarea className="form-control" aria-label="Source String" ref={this.q} onChange={this.getMd5}></textarea>
                    </div>
                    <hr />
                    <p className="card-text"><b>MD5_32: </b></p>
                    <p className="card-text">{this.state.o_32} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn1} style={{ visibility: this.state.copy_btn1_visibility, float: "right" }}>Copy</button> <br /> </p>
                    <p className="card-text"><b>MD5_16: </b></p>
                    <p className="card-text">{this.state.o_16} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn2} style={{ visibility: this.state.copy_btn2_visibility, float: "right" }}>Copy</button></p>
                </div>
            </div>
        )
    }

    getMd5 = () => {
        const str = this.q.current.value
        if (str === "") {
            this.setState({
                o_32: "",
                o_16: "",
                copy_btn1_visibility: "hidden",
                copy_btn2_visibility: "hidden"
            })
        }
        else {
            axios.post(`${config.urls["Acan Server"]}/tool/api/getMd5`, {
                q: str
            }).then(res => {
                this.setState({
                    o_32: res.data.md5_32,
                    o_16: res.data.md5_16,
                    copy_btn1_visibility: "visible",
                    copy_btn2_visibility: "visible"
                })
            }).catch(err => {
                console.log("ERROR", err)
            })
        }
    }
}

export default Md5