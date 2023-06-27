const express = require("express")

const getCurrentDate = express.Router()

getCurrentDate.get("/getCurrentDate", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const currentTime = new Date()
    res.send({
        "currentYear": currentTime.getFullYear(),
        "currentMonth": currentTime.getMonth() + 1,
        "currentDate": currentTime.getDate(),
        "currentDay": currentTime.getDay()
    })
})

module.exports = getCurrentDate