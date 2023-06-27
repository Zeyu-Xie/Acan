const axios = require('axios')
const express = require("express")

const config = require("../../config.json")

const getRandomString = express.Router()

getRandomString.get("/getRandomString", (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    axios("https://api.api-ninjas.com/v1/facts?limit=1", {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(res_ => {
        res.send({ data: res_.data[0].fact })
    }).catch(err => {
        res.status(404).send("Not found" + ": " + "Failed to get a random string")
    })
})

module.exports = getRandomString