const express = require("express")
const mongodb = require("mongodb")

const authenticateToken = require("../middleWares/authenticateToken")

const config = require("../../../config.json")

const MongoClient = mongodb.MongoClient

const getAccountStatus = express.Router()

getAccountStatus.get("/", authenticateToken, async (req, res) => {
    try {
        const client = await MongoClient.connect(config.urls.database["read-only"])
        const db = client.db("users")
        const query = { username: req.query.username }
        const list = await db.collection("accounts").find(query).toArray()
        const role = list[0].role
        res.json({ username: req.query.username, token: req.headers.token, role: role, status: "online" })
        client.close()
    } catch (err) {
        res.status(500).send("Internal Server Error: " + err)
    }
})

module.exports = getAccountStatus