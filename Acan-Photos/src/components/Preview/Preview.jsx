import React from "react"
import { connect } from "react-redux"

import config from "../../config.json"
import "./Preview.css"

import unPreview from "../../store/actions/unPreview"
import loaded from "../../store/actions/loaded"
import loading from "../../store/actions/loading"

class Preview extends React.Component {

    render() {
        return (
            <div>
                <div id="mask"></div>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        {
                            (this.props.list) ? (this.props.list.map((item, index) => {
                                if (item.Key === this.props.imageName) {
                                    return (
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                                    )
                                }
                                else {
                                    return (
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={`Slide ${index + 1}`}></button>
                                    )
                                }
                            })) : (null)
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            (this.props.list) ? (
                                this.props.list.map((item, index) => {
                                    if (item.Key === this.props.imageName) {
                                        return (
                                            <div className="carousel-item active">
                                                <img src={`${config.urls["Acan Server"]}/photo/api/previewPhoto?name=${item.Key}`} alt={item.Key} />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>{item.Key}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className="carousel-item">
                                                <img src={`${config.urls["Acan Server"]}/photo/api/previewPhoto?name=${item.Key}`} alt={item.Key} />
                                                <div className="carousel-caption d-none d-md-block" style={{ color: "white", zIndex: "2" }}>
                                                    <h5>{item.Key}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })) : (null)
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="white" className="bi bi-x-square" viewBox="0 0 16 16" style={{ position: "fixed", right: "20px", top: "20px" }} onClick={this.props.unPreview}>
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        )
    }

    loading() {
        this.props.loading()
    }

    loaded() {
        this.props.loaded()
    }
}

const mapStateToProps = (state) => {
    return {
        imageName: state.imageName,
        isLoading: state.isLoading,
        list: state.list
    }
}

export default connect(mapStateToProps, loaded)(connect(null, loading)(connect(null, unPreview)(Preview)))