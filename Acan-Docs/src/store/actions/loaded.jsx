function loaded(dispatch) {
    return {
        loaded: () => dispatch({ type: "LOADED", is_loading: false })
    }
}

export default loaded