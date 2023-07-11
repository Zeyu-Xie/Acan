const initState = {
    docName: "Self Introduction.html",
    is_loading: false
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "SWITCH_DOC": {
            return {
                docName: action.docName,
                is_loading: state.is_loading
            }
        }
        case "LOADING": {
            return {
                docName: state.docName,
                is_loading: action.is_loading
            }
        }
        case "LOADED": {
            return {
                docName: state.docName,
                is_loading: action.is_loading
            }
        }
        default: {
            return state
        }
    }
}

export default reducer