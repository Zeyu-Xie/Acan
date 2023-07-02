function preview(dispatch) {
    return {
        preview: () => dispatch({ type: "PREVIEW", isPreview: true  })
    }
}

export default preview