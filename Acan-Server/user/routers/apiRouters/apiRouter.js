const express = require("express")

const login = require("./subApiRouters/login")
const signUp = require("./subApiRouters/signUp")
const getAccountStatus = require("./subApiRouters/getAccountStatus")
const deleteAccount = require("./subApiRouters/deleteAccount")

const apiRouter = express.Router()

apiRouter.use("/login", login)
apiRouter.use("/signUp", signUp)
apiRouter.use("/getAccountStatus", getAccountStatus)
apiRouter.use("/deleteAccount", deleteAccount)

module.exports = apiRouter