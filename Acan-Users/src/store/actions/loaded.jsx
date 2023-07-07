function loaded(dispatch) {
    return {
        loaded: () => dispatch({ type: 'LOADED', isLoading: false })
    }
}

export default loaded