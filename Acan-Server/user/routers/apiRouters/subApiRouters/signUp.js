const express = require("express")
const mongodb = require("mongodb")

const config = require("../../../config.json")

const MongoClient = mongodb.MongoClient

const signUp = express.Router()

signUp.get("/", async (req, res) => {
    try {
        const username = req.query.username
        const password = req.query.password

        const client = await MongoClient.connect(config.urls.database["read-and-write"])
        const db = client.db("users")
        const query = { username: username }
        const list = await db.collection("accounts").find(query).toArray()

        if (list.length > 0) {
            res.status(401).send("Unauthorized: " + "Username Already Exists")
            client.close()
            return
        }

        await db.collection("accounts").insertOne({ username: username, password: password, role: "readOnly" })

        client.close()

        res.json({ ok: 1 })

    } catch (err) {
        res.status(500).send("Internal Server Error: " + err)
    }
})

module.exports = signUp