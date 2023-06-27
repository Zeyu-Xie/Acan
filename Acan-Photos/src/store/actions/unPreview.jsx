function unPreview(dispatch) {
    return {
        unPreview: () => dispatch({ type: "UNPREVIEW", isPreview: false })
    }
}

export default unPreview