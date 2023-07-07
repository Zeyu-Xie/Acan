const initState = {
    onDisplayName: "Start",
    username: "",
    startFrom: "Login",
    isLoading: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SWITCH_ON_DISPLAY_NAME": {
            return {
                ...state,
                onDisplayName: action.onDisplayName
            }
        }
        case "LOGIN": {
            return {
                ...state,
                username: action.username
            }
        }
        case "SWITCH_START_FROM": {
            return {
                ...state,
                startFrom: action.startFrom
            }
        }
        case "LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case "LOADED": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: {
            return state
        }
    }
}

export default reducer