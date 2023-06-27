const express = require("express")

const getCurrentTime = express.Router()

getCurrentTime.get("/getCurrentTime", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const currentTime = new Date()
    res.send({
        "currentHour": currentTime.getHours(),
        "currentMinute": currentTime.getMinutes(),
        "currentSecond": currentTime.getSeconds()
    })
})

module.exports = getCurrentTime