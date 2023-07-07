const express = require("express")
const router=require("./routers/router")

const user = express()

user.use("/",router)

module.exports=user