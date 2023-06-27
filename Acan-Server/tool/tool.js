const express = require("express")
const toolApi = require("./toolApi/toolApi")

const tool = express.Router()

tool.use("/tool", toolApi)

module.exports = tool