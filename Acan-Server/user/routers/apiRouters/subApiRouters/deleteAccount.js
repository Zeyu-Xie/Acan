const express = require("express")
const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient
const config = require("../../../config.json")
const authenticateToken = require("../middleWares/authenticateToken")

const deleteAccount = express.Router()

deleteAccount.get("/", authenticateToken, async (req, res) => {
    try {
        const username = req.query.username
        const password = req.query.password
        const client = await MongoClient.connect(config.urls.database["read-and-write"])
        const db = client.db("users")
        const query = { username: username, password: password }
        const list = await db.collection("accounts").find(query).toArray()

        if (list.length === 0) {
            res.status(401).send("Unauthorized: " + "Wrong Password")
            client.close()
            return
        }

        await db.collection("accounts").deleteOne(query)
        res.json({ ok: 1 })
        client.close()

    } catch (err) {
        res.status(500).send("Internal Server Error: " + err)
    }
})

module.exports = deleteAccount