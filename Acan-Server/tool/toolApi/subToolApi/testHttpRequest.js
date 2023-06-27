const express = require("express")

const testHttpRequest = express.Router()

testHttpRequest.all("/testHttpRequest", (req, res) => {

    res.setHeader("Content-Type", "application/json")

    res.send({
        "requestMethod": req.method,
        "requestUrl": req.url,
        "requestBody": req.body,
        "requestQueryParameters": req.query,
        "requestCookies": req.cookies,
        "requestSession": req.session,
        "requestIp": req.ip,
        "requestUserAgent": req.get("user-agent")
    })
})

module.exports = testHttpRequest