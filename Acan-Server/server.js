const express = require("express")
const fs=require("fs")
const bodyParser = require("body-parser")
const path = require("path")

// const account = require("./account/account")
const doc = require("./doc/doc")
const photo = require("./photo/photo")
const tool = require("./tool/tool")

const config = require("./config.json")

const app = express()

app.use(express.static("../Acan-Home/build"))
app.use(express.static("../Acan-Docs/build"))
app.use(express.static("../Acan-Photos/build"))
app.use(express.static("../Acan-Tools/build"))

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, token")
  next()
})


// app.use("/", account)
app.use("/", doc)
app.use("/", photo)
app.use("/", tool)

app.get("/page/home",(req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.sendFile(path.join(__dirname, "../Acan-Home/build/index.html"));
})

app.get("/page/doc",(req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Docs/build/index.html"))
})

app.get("/page/photo",(req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Photos/build/index.html"))
})

app.get("/page/tool",(req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Tools/build/index.html"))
})

app.listen(config.port, () => {
    console.log("Server Created")
})