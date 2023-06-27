const express = require('express');
const crypto = require('crypto');

const getKeyPair = express.Router()

getKeyPair.get('/getKeyPair', (req, res) => {

    res.setHeader("Content-Type", "Application/json")

    switch (req.query.encryptionType) {
        case "rsa": {
            const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
                modulusLength: 2048
            })
            const publicKeyPEM = publicKey.export({ type: 'spki', format: 'pem' }).toString()
            const privateKeyPEM = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString()
            res.send({
                publicKey: publicKeyPEM,
                privateKey: privateKeyPEM
            })
            break
        }
        case "ecc": {
            const { publicKey, privateKey } = crypto.generateKeyPairSync("ec", {
                namedCurve: 'secp256k1'
            })
            const publicKeyPEM = publicKey.export({ type: 'spki', format: 'pem' }).toString()
            const privateKeyPEM = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString()
            res.send({
                publicKey: publicKeyPEM,
                privateKey: privateKeyPEM
            })
            break
        }
        case "dsa": {
            const { publicKey, privateKey } = crypto.generateKeyPairSync("dsa", {
                modulusLength: 2048
            })
            const publicKeyPEM = publicKey.export({ type: 'spki', format: 'pem' }).toString()
            const privateKeyPEM = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString()
            res.send({
                publicKey: publicKeyPEM,
                privateKey: privateKeyPEM
            })
            break
        }
        case "ed25519": {
            const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519")
            const publicKeyPEM = publicKey.export({ type: 'spki', format: 'pem' }).toString()
            const privateKeyPEM = privateKey.export({ type: 'pkcs8', format: 'pem' }).toString()
            res.send({
                publicKey: publicKeyPEM,
                privateKey: privateKeyPEM
            })
            break
        }
        default: {
            res.status(400).send("Bad Request" + ": " + "Unsupported encryption type")
        }
    }
})

module.exports = getKeyPair