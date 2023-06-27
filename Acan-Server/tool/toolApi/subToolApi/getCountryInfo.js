const express = require("express")
const axios = require('axios')

const getCountryInfo = express.Router()

getCountryInfo.get("/getCountryInfo", (req, res) => {
    const queryCountryName = req.query.name
    axios.get(`https://restcountries.com/v2/name/${queryCountryName}`).then(res_ => res_.data).then(res_ => {
        res.send({ data: res_ })
    }).catch(err => {
        res.status(404).send("Not Found" + ": " + "Cannot get country info")
    })
})

module.exports = getCountryInfo