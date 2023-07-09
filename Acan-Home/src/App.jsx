import React from "react"

import "./App.css"
import cafe from "./cafe.jpg"
import config from "./config.json"

class App extends React.Component {

    navCollapse = React.createRef()

    constructor(props) {
        super(props)
        this.scrollToBottom = this.scrollToBottom.bind(this)
    }

    componentDidMount(props) {
        this.navCollapse.current.addEventListener("shown.bs.collapse", this.scrollToBottom)
    }

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
                            ACAN
                            <br />
                            WEBSITE
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

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a id="bottom-nav-brand" className="navbar-brand" href="#">Acan Home</a>
                        <button id="bottom-nav-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={this.navCollapse}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href={config.urls.github}>
                                        GitHub /&nbsp;
                                    </a>
                                    <a className="nav-link" href={config.urls.instagram}>
                                        Instagram /&nbsp;
                                    </a>
                                    <a className="nav-link" href={config.urls.email}>
                                        Email
                                    </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home /&nbsp;
                                    </a>
                                    <a className="nav-link" href={`${config.urls["Acan Server"]}/page/doc`}>
                                        Doc /&nbsp;
                                    </a>
                                    <a className="nav-link" href={`${config.urls["Acan Server"]}/page/photo`}>
                                        Photo /&nbsp;
                                    </a>
                                    <a className="nav-link" href={`${config.urls["Acan Server"]}/page/tool`}>
                                        Tool /&nbsp;
                                    </a>
                                    <a className="nav-link" href={`${config.urls["Acan Server"]}/page/user`}>
                                        User
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    scrollToBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

}

export default App