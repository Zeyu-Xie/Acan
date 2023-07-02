function switchImage(dispatch) {
    return {
        switchImage: (imageName) => dispatch({ type: "SWITCH_IMAGE", imageName: imageName })
    }
}

export default switchImage