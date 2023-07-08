import React from "react"

import "./App.css"
import cafe from "./cafe.jpg"
import config from "./config.json"

class App extends React.Component {
    render() {
        return (
            <div className="wp-site-blocks">
                <main className="wp-block-group is-layout-flow wp-container-8 wp-block-group-is-layout-flow" id="wp--skip-link--target">
                    <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained my-0">
                        <div className="wp-block-columns alignfull is-layout-flex wp-container-3 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow px-0">
                                <figure className="wp-block-image m-0">
                                    <img decoding="async" src={cafe} alt="Acan Home" />
                                </figure>
                            </div>
                            <div id="central-header-box" className="wp-block-column is-vertically-aligned-bottom has-global-padding is-layout-constrained wp-container-2 wp-block-column-is-layout-constrained" style={{ flexBasis: "33.5%" }}>
                                <h1 id="central-header" className="wp-block-heading">
                                    Acan
                                    <br />
                                    Website
                                </h1>
                            </div>
                        </div>
                        <div className="wp-block-columns alignfull is-layout-flex wp-container-6 wp-block-columns-is-layout-flex">
                            <div id="central-quote" className="wp-block-column has-global-padding is-content-justification-right is-layout-constrained wp-container-4 wp-block-column-is-layout-constrained">
                                <p>
                                    Welcome to Acan's personal website, where I display my works and share my life. I am a
                                    student from Tsinghua University, majoring in Mathematics but dreaming of becoming a
                                    programmer. I hope my passion and effort can be seen from this website.
                                </p>
                            </div>
                            <div id="unknown-block" className="wp-block-column has-global-padding is-content-justification-left is-layout-constrained wp-container-5 wp-block-column-is-layout-constrained">

                            </div>
                        </div>
                        <div id="central-padding" aria-hidden="true" className="wp-block-spacer">

                        </div>
                    </div>
                </main>
                <footer className="wp-block-template-part">
                    <div className="row px-3 pb-3 align-items-center">

                        <div id="footer-title">
                            <h1 className="wp-block-site-title">
                                <a id="footer-title" href="#" target="_self" rel="home" aria-current="page">
                                    Acan Xie
                                </a>
                            </h1>
                        </div>

                        <div id="footer-contact">
                            <p className="has-x-small-font-size m-0">
                                <a href={config.urls.github}>GitHub</a> / <a href={config.urls.instagram}>Instagram</a> / <a href={config.urls.email}>Email</a>
                            </p>
                        </div>

                        <div className="col">
                            <p className="has-text-align-right has-x-small-font-size m-0 text-end">
                                <a href="#" rel="nofollow">
                                    Home
                                </a>
                                &nbsp;/&nbsp;
                                <a href={`${config.urls["Acan Server"]}/page/doc`} rel="nofollow">
                                    Doc
                                </a>
                                &nbsp;/&nbsp;
                                <a href={`${config.urls["Acan Server"]}/page/photo`} rel="nofollow">
                                    Photo
                                </a>
                                &nbsp;/&nbsp;
                                <a href={`${config.urls["Acan Server"]}/page/tool`} rel="nofollow">
                                    Tool
                                </a>
                                &nbsp;/&nbsp;
                                <a href={`${config.urls["Acan Server"]}/page/user`} rel="nofollow">
                                    User
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App