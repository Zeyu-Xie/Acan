const express = require("express")
const bodyParser = require("body-parser")

const config = require("./config.json")
const doc = require("./doc")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, token")
    next()
})

app.use("/", doc)

app.listen(config.port, () => {
    console.log("Server created")
})