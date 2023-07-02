function loaded(dispatch) {
    return {
        loaded: () => dispatch({ type: "LOADED", isLoading: true })
    }
}

export default loaded