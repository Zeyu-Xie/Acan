function switchTool(dispatch) {
    return {
        switchTool: (tool) => dispatch({ type: "SWITCH_TOOL", toolName: tool })
    }
}

export default switchTool