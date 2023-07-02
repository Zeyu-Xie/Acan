const initState = {
    imageName: "",
    list: [],
    isPreview: false,
    isLoading: false
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "PREVIEW": {
            return {
                imageName: state.imageName,
                list: state.list,
                isPreview: action.isPreview,
                isLoading: state.isLoading
            }
        }
        case "UNPREVIEW": {
            return {
                imageName: state.imageName,
                list: state.list,
                isPreview: action.isPreview,
                isLoading: state.isLoading
            }
        }
        case "LOADING": {
            return {
                imageName: state.imageName,
                list: state.list,
                isPreview: state.isPreview,
                isLoading: action.isLoading
            }
        }
        case "LOADED": {
            return {
                imageName: state.imageName,
                list: state.list,
                isPreview: state.isPreview,
                isLoading: action.isLoading
            }
        }
        case "SWITCH_IMAGE": {
            return {
                imageName: action.imageName,
                list: state.list,
                isPreview: state.isPreview,
                isLoading: state.isLoading
            }
        }
        case "SET_LIST": {
            return {
                imageName: state.imageName,
                list: action.list,
                isPreview: state.isPreview,
                isLoading: state.isLoading
            }
        }
        default: {
            return state
        }
    }
}

export default reducer