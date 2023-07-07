function switchOnDisplayName(dispatch) {
    return {
        switchOnDisplayName: (onDisplayName) => dispatch({
            type: "SWITCH_ON_DISPLAY_NAME",
            onDisplayName: onDisplayName
        })
    }
}

export default switchOnDisplayName