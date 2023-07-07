const express = require("express")
const jwt = require("jsonwebtoken")
const mongodb = require("mongodb")

const config = require("../../../config.json")

const MongoClient = mongodb.MongoClient

const login = express.Router()

login.get("/", async (req, res) => {
    try {
        const username = req.query.username
        const password = req.query.password

        const client = await MongoClient.connect(config.urls.database["read-only"])
        const db = client.db("users")
        const qurey = { username: username, password: password }

        const list = await db.collection("accounts").find(qurey).toArray()
        client.close()

        if (list.length === 0) {
            return res.status(401).send("Unauthorized: " + "Wrong Username or Password")
        }

        const token = jwt.sign({ username: username }, config.apiKeys["Acan-User"].secretKey, { expiresIn: "1h" })
        res.json({ token: token })
    } catch (err) {
        res.status(500).send("Internal Server Error: " + err)
    }
})

module.exports = login