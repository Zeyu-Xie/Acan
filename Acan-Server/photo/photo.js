const express = require("express")
const folderApi = require("./folderApi/folderApi")
const photoApi = require("./photoApi/photoApi")

const photo = express.Router()

photo.use("/photo/api", folderApi)
photo.use("/photo/api", photoApi)

module.exports = photo