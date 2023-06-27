const express = require("express")
const getDoc = require("./subContent/getDoc")
const downloadDoc = require("./subContent/downloadDoc")

const content = express.Router()

content.use("/content", getDoc)
content.use("/content",downloadDoc)

module.exports = content