const express = require("express")
const mongodb = require("mongodb")

const MongoClient = mongodb.MongoClient
const config = require("../../../config.json")
const authenticateToken = require("../middleWares/authenticateToken")

const resetPassword = express.Router()

resetPassword.get("/", authenticateToken, async (req, res) => {
    try {
        const username = req.query.username
        const client = await MongoClient.connect(config.urls.database["read-and-write"])
        const db = client.db("users")
        const query = { username: username}
        const list = await db.collection("accounts").findOneAndUpdate(query, {$set: {password: req.query.newPassword}})

        res.json({ ok: 1 })
        client.close()

    } catch (err) {
        res.status(500).send("Internal Server Error: " + err)
    }
})

module.exports = resetPassword