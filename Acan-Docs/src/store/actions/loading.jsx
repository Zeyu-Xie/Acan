function loading(dispatch) {
    return {
        loading: () => dispatch({ type: "LOADING", is_loading: true })
    }
}

export default loading