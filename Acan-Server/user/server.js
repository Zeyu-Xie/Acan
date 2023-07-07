const express = require("express")
const fs = require("fs")
const bodyParser = require("body-parser")
const path = require("path")

const config = require("./config.json")

const router=require("./routers/router")

const app = express()

app.use(express.static("../Front-End/build"))

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST ,DELETE, OPTIONS")
    res.header("Accrss-Control-Allow-Headers", "X-Requested-With, Content-Type, token")
    next()
})

app.use("/",router)

app.listen(config.port, () => {
    console.log("Server created")
})