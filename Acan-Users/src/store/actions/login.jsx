function login(dispatch) {
    return {
        login: (username) => dispatch({ type: "LOGIN", username: username })
    }
}

export default login