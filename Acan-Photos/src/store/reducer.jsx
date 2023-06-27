const initState = {
    isPreview: false,
    list: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "PREVIEW": {
            return {
                isPreview: true,
                list: action.list
            }
        }
        case "UNPREVIEW": {
            return {
                isPreview: false
            }
        }
        default: {
            return state
        }
    }
}

export default reducer