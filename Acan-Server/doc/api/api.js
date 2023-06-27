const express = require("express")

const getList = require("./subApi/getList")
const deleteDoc = require("./subApi/deleteDoc")
const renameDoc = require("./subApi/renameDoc")
const uploadDoc = require("./subApi/uploadDoc")

const api = express.Router()

api.use("/api", getList)
api.use("/api", deleteDoc)
api.use("/api", renameDoc)
api.use("/api", uploadDoc)

module.exports = api