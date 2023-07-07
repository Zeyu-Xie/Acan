const express = require("express")

const apiRouter = require("./apiRouters/apiRouter")

const router = express.Router()

router.use("/api",apiRouter)

module.exports = router