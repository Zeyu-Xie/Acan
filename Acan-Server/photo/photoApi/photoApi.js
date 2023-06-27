const express = require("express")

const previewPhoto = require("./subPhotoApi/previewPhoto")
const downloadPhoto = require("./subPhotoApi/downloadPhoto")
const renamePhoto = require("./subPhotoApi/renamePhoto")
const deletePhoto = require("./subPhotoApi/deletePhoto")

const photoApi = express.Router()

photoApi.use("/", previewPhoto)
photoApi.use("/", downloadPhoto)
photoApi.use("/", deletePhoto)
photoApi.use("/", renamePhoto)

module.exports = photoApi