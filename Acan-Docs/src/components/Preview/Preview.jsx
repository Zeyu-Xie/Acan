import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import config from "../../config.json"
import "./Preview.css"

class Preview extends React.Component {

    state = {
        content: ""
    }

    ref = React.createRef()

    constructor(props) {
        super(props)
        this.getDoc = this.getDoc.bind(this)
    }

    componentDidMount() {
        this.getDoc()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.docName !== this.props.docName) {
            this.getDoc()
        }
    }

    render() {
        return (
            <div>
                <div id="preview-content" className="py-4 px-3">
                    <div className="container py-4 px-md-5 px-4" ref={this.ref1}>
                        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
                    </div>
                </div>
            </div >
        )
    }

    async getDoc() {
        await axios.get(`${config.urls["Acan Server"]}/doc/content/getDoc?name=${this.props.docName}`).then(res => {
            this.setState({
                content: res.data.data
            })
        }).catch(err => {
            console.log("ERROR", err)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        docName: state.docName
    }
}

export default connect(mapStateToProps)(Preview)