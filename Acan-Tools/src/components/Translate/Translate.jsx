import React from "react"
import axios from "axios"
import ClipboardJS from "clipboard"
import { connect } from "react-redux"
import loading from "../../store/actions/loading"
import loaded from "../../store/actions/loaded"

import "./Translate.css"

import config from "../../config"

class Translate extends React.Component {

    state = {
        source: "",
        translation: "",
        copy_btn_visibility: "hidden"
    }

    q = React.createRef()
    copy_btn = React.createRef()

    componentDidMount() {
        this.clipboard = new ClipboardJS(this.copy_btn.current, {
            text: () => this.state.translation
        })
    }

    render() {
        return (
            <div className="card flip-in-hor-bottom col-sm-9 col-md-6 col-lg-5 col-xl-4 col-11" id="id1">
                <div className="card-body">
                    <h5 className="card-title">Translate 💬</h5>
                    <hr />
                    <div className="input-group">
                        <span className="input-group-text">Source Text</span>
                        <textarea className="form-control" aria-label="Source Text" ref={this.q} onChange={this.submitTranslate} style={{backgroundColor: "rgba(255,255,255,0.4)"}}></textarea>
                    </div>
                    <hr />
                    <p className="card-text"><b>Translation: </b></p>
                    <p className="card-text">{this.state.translation} <button className="btn btn-outline-secondary btn-sm" ref={this.copy_btn} style={{ visibility: this.state.copy_btn_visibility, float: "right" }}>Copy</button> <br /> </p>
                </div>
            </div>
        )
    }

    submitTranslate = () => {

        const q = this.q.current.value
        const from = "en"
        const to = "zh"

        if (q === "") {
            this.setState({
                translation: "",
                copy_btn_visibility: "hidden"
            })
        }

        else {
            axios.post(`${config.urls["Acan Server"]}/tool/api/translate?from=${from}&to=${to}`, {
                q: q
            }).then(res => {
                this.setState({
                    translation: res.data.data,
                    copy_btn_visibility: "visible"
                })
            }).catch(err => {
                console.log("ERROR", err)
            })
        }
    }
}

export default connect(null, loaded)(connect(null, loading)(Translate))