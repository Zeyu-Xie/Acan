const axios = require('axios')
const express = require("express")

const config = require("../../config.json")
const getRandomUser = express.Router()

getRandomUser.get("/getRandomUser", (req, res) => {
    axios("https://api.api-ninjas.com/v1/randomuser", {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(_res => {
        res.send(_res.data)
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Failed to get a random user")
    })
})

module.exports = getRandomUser