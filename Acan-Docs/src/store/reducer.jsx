const initState = {
    docName: "Self Introduction.html"
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "SWITCH_DOC": {
            return {
                docName: action.docName
            }
        }
        default: {
            return state
        }
    }
}

export default reducer