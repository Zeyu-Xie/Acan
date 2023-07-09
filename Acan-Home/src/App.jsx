import React from "react"

import "./App.css"
import cafe from "./cafe.jpg"
import config from "./config.json"

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                {/* row1 */}

                <div id="home-row1" className="row mb-4">
                    <div id="home-photo-box" className="col-12 col-md-8 p-0">
                        <img src={cafe} alt="Acan Home" />
                    </div>
                    <div id="home-header-box" className="d-flex col-12 col-md-4 align-items-end">
                        <h1 className="mt-5 mb-0">
                            Acan
                            <br />
                            Website
                        </h1>
                    </div>
                </div>

                {/* row2 */}

                <div id="home-row2" className="row justify-content-center">
                    <div className="col-12 col-md-6">
                        <p id="central-text" className="text-wrap">
                            {config.content["central-text"]}
                        </p>
                    </div>
                </div>

                {/* row3 */}

                <div id="home-row3" className="row">

                    <div id="bottom-nav-header-box">
                        <h2 className="m-0">
                            <a href="#">
                                Acan Home
                            </a>
                        </h2>
                    </div>

                    <div id="bottom-nav-social-box">
                        <a href={config.urls.github}>Github</a> / <a href={config.urls.instagram}>Instagram</a> / <a href={config.urls.email}>Email</a>
                    </div>

                    <div id="bottom-nav-menu-box" className="justify-self-end">
                        <a href="#">Home</a> / <a href={`${config.urls["Acan Server"]}/page/doc`}>Doc</a> / <a href={`${config.urls["Acan Server"]}/page/photo`}>Photo</a> / <a href={`${config.urls["Acan Server"]}/page/tool`}>Tool</a> / <a href={`${config.urls["Acan Server"]}/page/user`}>User</a>
                    </div>

                </div>
            </div>
        )
    }
}

export default App