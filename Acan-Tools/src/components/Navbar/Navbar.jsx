import React from "react"
import { connect } from "react-redux"
import loading from "../../../../Acan-Docs/src/store/actions/loading"
import loaded from "../../../../Acan-Docs/src/store/actions/loaded"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: "10" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Acan-Tools 🔧</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/home`}><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/doc`}><b>Doc</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/photo`}><b>Photo</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${config.urls["Acan Server"]}/page/tool`}><b>Tool</b></a>
                            </li>
                        </ul>




                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Select Tools 👉</b>
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        (this.state.toolList) ? (this.state.toolList.map((item, index) => {
                                            return (
                                                <li>
                                                    <a className="dropdown-item" href="#" onClick={() => {
                                                        this.setState({
                                                            toolName: item
                                                        }, () => {
                                                            this.refresh()
                                                        })
                                                    }}>{item}
                                                    </a>
                                                </li>
                                            )
                                        })) : (null)
                                    }
                                </ul>
                            </li>







                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toolName: state.toolName
    }
}

export default connect(mapStateToProps, loaded)(connect(null, loading)(Navbar))