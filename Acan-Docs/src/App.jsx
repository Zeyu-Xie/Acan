import React from "react"

import Preview from "./components/Preview/Preview"
import Navbar from "./components/Navbar/Navbar"
import SpinnerBorder from "./components/SpinnerBorder/SpinnerBorder"

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Preview />
                <SpinnerBorder />
            </div>
        )
    }
}

export default App