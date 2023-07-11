import React from "react"
import { connect } from "react-redux"

class SpinnerBorder extends React.Component {
    render() {
        return (
            this.props.isLoading ? (<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span></div>) : null
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(SpinnerBorder)