import React from "react"

import Preview from "./components/Preview/Preview"
import Navbar from "./components/Navbar/Navbar"
import SpinnerBorder from "./components/SpinnerBorder/SpinnerBorder"
import Footer from "./components/Footer/Footer"

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Preview />
                <Footer />
                <SpinnerBorder />
            </div>
        )
    }
}

export default App