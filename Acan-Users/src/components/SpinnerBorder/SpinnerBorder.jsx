import React from "react"
import { connect } from "react-redux"

import "./SpinnerBorder.css"

class SpinnerBorder extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.isLoading ? < div id="spinner-border" className="spinner-border text-secondary" role="status" >
                        <span className="visually-hidden">Loading...</span>
                    </div > : null
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SpinnerBorder)