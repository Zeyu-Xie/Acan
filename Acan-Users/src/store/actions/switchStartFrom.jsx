function switchStartFrom(dispatch) {
    return {
        switchStartFrom: (startFrom)=>dispatch({type: 'SWITCH_START_FROM', startFrom: startFrom})
    }
}

export default switchStartFrom