const express = require("express")
const bodyParser = require("body-parser")

const config = require("./config.json")
const folderApi = require("./folderApi/folderApi")
const photoApi = require("./photoApi/photoApi")
const photo = require("./photo")

const app = express()

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw({ limit: "50mb" }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, token")
    next()
})

app.use("/", photo)

app.listen(config.port, () => {
    console.log("Server created")
})