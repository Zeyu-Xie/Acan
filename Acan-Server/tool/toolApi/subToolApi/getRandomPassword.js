const axios = require('axios')
const express = require("express")

const config = require("../../config")
const getRandomPassword = express.Router()

getRandomPassword.get("/getRandomPassword", async (req, res) => {

    let data = []

    await axios(`https://api.api-ninjas.com/v1/passwordgenerator?length=${req.query.length}`, {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(_res => {
        data.push(_res.data.random_password)
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Failed to get a random password")
        return
    })
    await axios(`https://api.api-ninjas.com/v1/passwordgenerator?length=${req.query.length}&exclude_numbers=true`, {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(_res => {
        data.push(_res.data.random_password)
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Failed to get a random password")
        return
    })
    await axios(`https://api.api-ninjas.com/v1/passwordgenerator?length=${req.query.length}&exclude_special_chars=true`, {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(_res => {
        data.push(_res.data.random_password)
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Failed to get a random password")
        return
    })
    await axios(`https://api.api-ninjas.com/v1/passwordgenerator?length=${req.query.length}&exclude_numbers=true&exclude_special_chars=true`, {
        headers: {
            "X-Api-Key": config.apiKeys.apiNinjas.xApiKey
        }
    }).then(_res => {
        data.push(_res.data.random_password)
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Failed to get a random password")
        return
    })
    res.json({ default: data[0], numberRemoved: data[1], specialSignalRemoved: data[2], alphabetOnly: data[3] })
})

module.exports = getRandomPassword