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
        loading: state.loading
    }
}

export default connect(mapStateToProps)(SpinnerBorder)