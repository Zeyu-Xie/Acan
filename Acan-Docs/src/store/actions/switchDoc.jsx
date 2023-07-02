function switchDoc(dispatch) {
    return {
        switchDoc: (name) => dispatch({ type: "SWITCH_DOC", docName: name })
    }
}

export default switchDoc