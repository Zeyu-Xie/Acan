const express = require("express")
const COS = require('cos-nodejs-sdk-v5')
const axios = require("axios")

const config = require("../../config.json")

const importPhoto = express.Router()

importPhoto.post("/importPhoto", (req, res) => {

    const url = req.body.url
    let type = (req.query.type === "auto") ? (url.match(/\.[^.]+$/)) : ("." + req.query.type)
    if(!type) type=""
    let name = ""
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        name += characters.charAt(randomIndex);
    }

    axios.get(url, { responseType: "arraybuffer" }).then(_res => {
        const cos = new COS({
            SecretId: config.apiKeys.tencentDeveloper.secretId,
            SecretKey: config.apiKeys.tencentDeveloper.secretKey
        })
        cos.putObject({
            Bucket: config.others.tencentDeveloper.Bucket,
            Region: config.others.tencentDeveloper.Region,
            Key: name + type,
            StorageClass: 'STANDARD',
            Body: _res.data
        }, function (__err, data) {
            if (__err) {
                res.status(403).send("Forbidden")
            }
            else {
                res.send({ "ok": 1 })
            }
        })

    }).catch(_err => {
        res.status(404).send("Not Found")
    })
})

module.exports = importPhoto