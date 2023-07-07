const jwt = require("jsonwebtoken")
const mongodb = require("mongodb")

const config = require("../../../config.json")

const MongoClient = mongodb.MongoClient

const authenticateTokenByCookie = (req, res, next) => {

    const token=req.cookies["token"]
    const username=req.cookies["username"]

    if (!token) {
        return res.status(401).send("Unauthorized: " + "Token Not Found")
    }
    jwt.verify(token, config.apiKeys["Acan-User"].secretKey, async (err, user) => {
        if (err) {
            return res.status(401).send("Unauthorized: " + "Invalid Token")
        }
        if (user.username !== username) {
            return res.status(401).send("Unauthorized: " + "Username and Token do not Match")
        }

        const client = await MongoClient.connect(config.urls.database["read-only"])
        const db = client.db("users")
        const query = { username: user.username }
        const list = await db.collection("accounts").find(query).toArray()
        client.close()

        if (list.length === 0) {
            return res.status(401).send("Unauthorized: " + "User Not Found")
        }

        next()

    })
}

module.exports = authenticateTokenByCookie