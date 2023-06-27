const express = require("express")

const getList = require("./subFolderApi/getList")
const importPhoto = require("./subFolderApi/importPhoto")
const uploadPhoto = require("./subFolderApi/uploadPhoto")

const folderApi = express.Router()

folderApi.use("/", getList)
folderApi.use("/", uploadPhoto)
folderApi.use("/", importPhoto)

module.exports = folderApi