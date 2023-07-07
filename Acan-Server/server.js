const express = require("express")
const fs = require("fs")
const bodyParser = require("body-parser")
const path = require("path")
const cookieParser=require("cookie-parser")

const doc = require("./doc/doc")
const photo = require("./photo/photo")
const tool = require("./tool/tool")

const authenticateTokenByCookie=require("./user/routers/apiRouters/middleWares/authenticateTokenByCookie")

const config = require("./config.json")
const user = require("./user/user")

const app = express()

app.use(express.static("../Acan-Home/build"))
app.use(express.static("../Acan-Docs/build"))
app.use(express.static("../Acan-Photos/build"))
app.use(express.static("../Acan-Tools/build"))
app.use(express.static("../Acan-Users/build"))

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, token")
  next()
})


app.use("/", doc)
app.use("/", photo)
app.use("/", tool)
app.use("/", user)

app.get("/page/home", (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.sendFile(path.join(__dirname, "../Acan-Home/build/index.html"));
})

app.get("/page/doc", authenticateTokenByCookie, (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Docs/build/index.html"))
})

app.get("/page/photo", authenticateTokenByCookie, (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Photos/build/index.html"))
})

app.get("/page/tool", authenticateTokenByCookie, (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Tools/build/index.html"))
})

app.get("/page/user", (req,res)=>{
  res.setHeader("Content-Type", "text/html")
  res.send(fs.readFileSync("../Acan-Users/build/index.html"))
})

app.listen(config.port, () => {
  console.log("Server Created")
})