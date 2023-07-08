const express = require("express")

const login = require("./subApiRouters/login")
const signUp = require("./subApiRouters/signUp")
const getAccountStatus = require("./subApiRouters/getAccountStatus")
const deleteAccount = require("./subApiRouters/deleteAccount")
const resetPassword = require("./subApiRouters/resetPassword")

const apiRouter = express.Router()

apiRouter.use("/login", login)
apiRouter.use("/signUp", signUp)
apiRouter.use("/getAccountStatus", getAccountStatus)
apiRouter.use("/deleteAccount", deleteAccount)
apiRouter.use("/resetPassword", resetPassword)

module.exports = apiRouter