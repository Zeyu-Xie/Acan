import React from "react"
import axios from "axios"

import weatherIconDay from "./weatherIconDay.png"
import weatherIconNight from "./weatherIconNight.png"
import weatherIconList from "./weatherIconList.json"

import config from "./config.json"

import "./Weather.css"


class Weather extends React.Component {

    state = {
        weather: null,
        location: "Beijing"
    }

    componentDidMount() {
        axios.get(`${config.urls["weather-api"]}?key=${config["api-keys"]["weather-api"]}&q=${this.state.location}&aqi=yes`)
            .then(res => {
                this.setState({ weather: res.data.current })
            })
            .catch(err => {
                console.log("ERROR", err)
            })
    }

    componentDidUpdate(prevProps, PrevState) {
        if (PrevState.location !== this.state.location) {
            axios.get(`http://api.weatherapi.com/v1/current.json?key=b4ae6d02601041b3b67152932231105&q=${this.state.location}&aqi=yes`)
                .then(res => {
                    this.setState({
                        weather: res.data.current
                    })
                })
                .catch(err => {
                    console.log("ERROR", err)
                })
        }
    }

    render() {

        return (
            <div id="card-weather" className="card col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-3 col-11 p-0 flip-in-hor-bottom">
                <div className="card-body">


                    <div className="row align-items-center">
                        <h5 className="card-title col-7 m-0 " style={{ display: "inline", textAlign: "center" }}>
                            {this.state.location}
                            <br />
                            {(this.state.weather === null) ? ("") : (this.state.weather.condition.text)}
                        </h5>

                        <div className="col-5" style={{ width: "64px", height: "64px", backgroundImage: `url(${(this.state.weather) && ((this.state.weather.is_day === 1) ? (weatherIconDay) : (weatherIconNight))})`, backgroundPosition: `${(this.state.weather) ? (weatherIconList.findIndex(item => item.code === this.state.weather.condition.code) * (-64)) : (-3072)}px 0`, display: "inline" }}>
                        </div>
                    </div>


                    <hr />

                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th scope="col">Real Time Temperature</th>
                                <td>{(this.state.weather === null) ? ("") : (this.state.weather.temp_c) + "°C"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="col">Humidity</th>
                                <td>{(this.state.weather === null) ? ("") : (this.state.weather.humidity + "%")}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="col">Wind Direction</th>
                                <td>{(this.state.weather === null) ? ("") : (this.state.weather.wind_dir)}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="col">Wind Speed</th>
                                <td>{(this.state.weather === null) ? ("") : (this.state.weather.wind_kph) + "km/h"}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <th scope="col">Precipitation</th>
                                <td>{(this.state.weather === null) ? ("") : (this.state.weather.precip_mm) + "mm"}</td>
                            </tr>
                        </tbody>
                    </table>

                    <hr />

                    <div className="btn-group dropup">
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Change Location
                        </button>
                        <ul className="dropdown-menu bg-body-tertiary" style={{ maxHeight: "8rem", overflow: "scroll" }}>
                            {
                                config.locationList.map(item => {
                                    return <li><a className="dropdown-item" onClick={() => { this.setState({ location: item }) }}>{item}</a></li>
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>

        )
    }
}

export default Weather