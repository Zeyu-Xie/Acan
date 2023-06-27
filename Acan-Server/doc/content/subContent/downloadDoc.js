const express = require("express")
const COS = require("cos-nodejs-sdk-v5")

const config = require("../../config.json")

const downloadDoc = express.Router()

downloadDoc.get("/downloadDoc", (req, res) => {
    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.getObject({
        Bucket: config.others.tencentDeveloper.bucket,
        Region: config.others.tencentDeveloper.region,
        Key: req.query.name
    }, (err, data) => {
        if (err) {
            console.log(err)
            res.status(404).send("Not Found")
        }
        else {
            res.setHeader("Content-Disposition", "attachment; filename=" + req.query.name)
            res.send(data.Body)
        }
    })
})

module.exports = downloadDoc