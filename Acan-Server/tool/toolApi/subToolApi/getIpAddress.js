const express = require("express")

const getIpAddress = express.Router()

getIpAddress.get("/getIpAddress", (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.send({
        "ipAddress": req.ip
    })
})

module.exports = getIpAddress