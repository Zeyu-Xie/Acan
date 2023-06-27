function preview(dispatch) {
    return {
        preview: (list) => dispatch({ type: "PREVIEW", isPreview: true, list: list })
    }
}

export default preview