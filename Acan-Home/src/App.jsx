import React from "react"

import "./App.css"

import cafe from "./cafe.jpg"

import config from "./config.json"

class App extends React.Component {
    render() {
        return (
            <div className="wp-site-blocks">
                <main className="wp-block-group is-layout-flow wp-container-8 wp-block-group-is-layout-flow"
                    id="wp--skip-link--target">
                    <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained my-0">
                        <div className="wp-block-columns alignfull is-layout-flex wp-container-3 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow px-0">
                                <figure className="wp-block-image m-0">
                                    <img decoding="async" src={cafe} alt="Acan Home" />
                                </figure>
                            </div>
                            <div className="wp-block-column is-vertically-aligned-bottom has-global-padding is-layout-constrained wp-container-2 wp-block-column-is-layout-constrained"
                                style={{ paddingRight: "var(--wp--preset--spacing--50)", paddingLeft: "var(--wp--preset--spacing--50)", flexBasis: "33.5%" }}>
                                <h1 className="wp-block-heading"
                                    style={{ fontSize: "max(48px, 5.5vw)", fontStyle: "normal", fontWeight: "700", lineHeight: "0.9" }}>
                                    Acan<br />Website
                                </h1>
                            </div>
                        </div>
                        <div className="wp-block-columns alignfull is-layout-flex wp-container-6 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column has-global-padding is-content-justification-right is-layout-constrained wp-container-4 wp-block-column-is-layout-constrained"
                                style={{ paddingRight: "var(--wp--preset--spacing--50)", paddingLeft: "var(--wp--preset--spacing--50)", flexBasis: "67%" }}>
                                <p>
                                    Welcome to Acan's personal website, where I display my works and share my life. I am a
                                    student from Tsinghua University, majoring in Mathematics but dreaming of becoming a
                                    programmer. I hope my passion and effort can be seen from this website.
                                </p>
                            </div>
                            <div className="wp-block-column has-global-padding is-content-justification-left is-layout-constrained wp-container-5 wp-block-column-is-layout-constrained"
                                style={{ paddingRight: "var(--wp--preset--spacing--50)", paddingLeft: "var(--wp--preset--spacing--50)", flexBasis: "33%" }}>
                            </div>
                        </div>
                        <div style={{ height: "2rem" }} aria-hidden="true" className="wp-block-spacer"></div>
                    </div>
                </main>
                <footer className="wp-block-template-part">
                    <div className="wp-block-group alignfull has-global-padding is-layout-constrained wp-block-group-is-layout-constrained"
                        style={{ paddingTop: "var(--wp--preset--spacing--80)" }}>
                        <div className="wp-block-group alignfull is-content-justification-space-between is-nowrap is-layout-flex wp-container-10 wp-block-group-is-layout-flex"
                            style={{ paddingTop: "var(--wp--preset--spacing--60)", paddingBottom: "var(--wp--preset--spacing--60)" }}>
                            <div className="wp-block-group is-nowrap is-layout-flex wp-container-9 wp-block-group-is-layout-flex"
                                style={{ paddingRight: "var(--wp--preset--spacing--50)", paddingLeft: "var(--wp--preset--spacing--50)" }}>
                                <h1 className="wp-block-site-title">
                                    <a href="#" target="_self"
                                        rel="home" aria-current="page" style={{ width: "max-content" }}>Acan Xie
                                    </a>
                                </h1>
                                <p className="has-x-small-font-size"><a href={config.urls.github}>GitHub</a> / <a href={config.urls.instagram}>Instagram</a> / <a
                                    href={config.urls.email}>Email</a></p>
                            </div>
                            <p className="has-text-align-right has-x-small-font-size">
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