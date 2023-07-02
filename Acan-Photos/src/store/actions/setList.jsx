function setList(dispatch) {
    return {
        setList: (list) => dispatch({ type: "SET_LIST", list: list })
    }
}

export default setList