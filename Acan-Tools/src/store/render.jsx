const initState = {
    toolName: "",
    isLoading: false,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_TOOL":
            return {
                isLoading: state.isLoading,
                toolName: action.toolName
            }
        case "LOADING":
            return {
                isLoading: true,
                toolName: state.toolName
            }
        case "LOADED":
            return {
                isLoading: false,
                toolName: state.toolName
            }
        default:
            return state
    }
}

export default reducer