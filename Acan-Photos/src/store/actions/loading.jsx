function loading(dispatch) {
    return {
        loading: () => dispatch({ type: "LOADING", isLoading: true })
    }
}

export default loading