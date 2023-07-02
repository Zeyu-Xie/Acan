import React from "react"
import axios from "axios"
import ClipboardJS from "clipboard"
import { connect } from "react-redux"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"

import "./RandomPassword.css"

import config from "../../config.json"

class RandomPassword extends React.Component {

    state = {
        o_default: "",
        o_numberRemoved: "",
        o_specialSignalRemoved: "",
        o_alphabetOnly: "",
        copy_btn1_visibility: "hidden",
        copy_btn2_visibility: "hidden",
        copy_btn3_visibility: "hidden",
        copy_btn4_visibility: "hidden"
    }

    q = React.createRef()
    copy_btn1 = React.createRef()
    copy_btn2 = React.createRef()
    copy_btn3 = React.createRef()
    copy_btn4 = React.createRef()

    componentDidMount() {
        this.clipboard = new ClipboardJS(this.copy_btn1.current, {
            text: () => this.state.o_default
        })

        this.clipboard = new ClipboardJS(this.copy_btn2.current, {
            text: () => this.state.o_numberRemoved
        })
        this.clipboard = new ClipboardJS(this.copy_btn3.current, {
            text: () => this.state.o_specialSignalRemoved
        })
        this.clipboard = new ClipboardJS(this.copy_btn4.current, {
            text: () => this.state.o_alphabetOnly
        })
    }

    render() {
        return (
            <div className="card flip-in-hor-bottom col-sm-9 col-md-6 col-lg-5 col-xl-4 col-11" id="id3">
                <div className="card-body">
                    <h5 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>&nbsp;Random Password Generator</h5>
                    <hr />
                    <div className="input-group">
                        <span className="input-group-text">

                            Password Length
                        </span>
                        <input type="number" className="form-control" aria-label="Source String" ref={this.q} />
                        <button className="btn btn-outline-secondary" onClick={this.getRandomPassword}>Generate</button>
                    </div>
                    <hr />
                    <p className="card-text"><b>Default: </b></p>
                    <p className="card-text">{this.state.o_default} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn1} style={{ visibility: this.state.copy_btn1_visibility, float: "right" }}>Copy</button> <br /> </p>
                    <p className="card-text"><b>Numbers Removed: </b></p>
                    <p className="card-text">{this.state.o_numberRemoved} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn2} style={{ visibility: this.state.copy_btn2_visibility, float: "right" }}>Copy</button> <br /> </p>
                    <p className="card-text"><b>Special Signals Removed: </b></p>
                    <p className="card-text">{this.state.o_specialSignalRemoved} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn3} style={{ visibility: this.state.copy_btn3_visibility, float: "right" }}>Copy</button> <br /> </p>
                    <p className="card-text"><b>Alphabets Only: </b></p>
                    <p className="card-text">{this.state.o_alphabetOnly} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn4} style={{ visibility: this.state.copy_btn4_visibility, float: "right" }}>Copy</button> <br /> </p>
                </div>
            </div>
        )
    }

    getRandomPassword = () => {
        const str = this.q.current.value
        if (str === "") {
            this.setState({
                o_default: "",
                o_numberRemoved: "",
                o_specialSignalRemoved: "",
                o_alphabetOnly: "",
                copy_btn1_visibility: "hidden",
                copy_btn2_visibility: "hidden",
                copy_btn3_visibility: "hidden",
                copy_btn4_visibility: "hidden"
            })
        }
        else {
            axios.get(`${config.urls["Acan Server"]}/tool/api/getRandomPassword?length=${this.q.current.value}`).then(res => {
                this.setState({
                    o_default: res.data.default,
                    o_numberRemoved: res.data.numberRemoved,
                    o_specialSignalRemoved: res.data.specialSignalRemoved,
                    o_alphabetOnly: res.data.alphabetOnly,
                    copy_btn1_visibility: "visible",
                    copy_btn2_visibility: "visible",
                    copy_btn3_visibility: "visible",
                    copy_btn4_visibility: "visible"
                })
            }).catch(err => {
                console.log("ERROR", err)
            })
        }
    }
}

export default connect(null, loaded)(connect(null, loading)(RandomPassword))