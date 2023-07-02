import React from "react"
import List from "./components/List/List"
import SpinnerBorder from "./components/SpinnerBorder/SpinnerBorder"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-10 m-4">
                        <h1 className="col-5"><b>Acan Photos 📷</b></h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <List />
                </div>
                <SpinnerBorder />
            </div>
        )
    }
}

export default App