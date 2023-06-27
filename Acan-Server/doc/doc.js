const express=require("express")

const doc=express.Router()

const api=require("./api/api")
const content=require("./content/content")

doc.use("/doc",api)
doc.use("/doc",content)

module.exports=doc