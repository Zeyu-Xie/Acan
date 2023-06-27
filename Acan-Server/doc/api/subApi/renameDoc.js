const express = require("express")
const COS = require("cos-nodejs-sdk-v5")

const config = require("../../config.json")
const renameDoc = express.Router()

renameDoc.get("/renameDoc", (req, res) => {

    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })

    const Bucket = config.others.tencentDeveloper.bucket
    const Region = config.others.tencentDeveloper.region
    const Key = req.query.newName
    const CopySource = Bucket + ".cos." + Region + ".myqcloud.com/" + req.query.oldName

    cos.putObjectCopy({
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        CopySource: CopySource
    }, (err, data) => {
        if (err) {
            console.log("ERROR", err)
            res.status(404).send("Not Found")
        }
        else {
            cos.deleteObject({
                Bucket: config.others.tencentDeveloper.bucket,
                Region: config.others.tencentDeveloper.region,
                Key: req.query.oldName
            }, (_err, _data) => {
                if (_err) {
                    console.log("ERROR", _err)
                    res.status(500).send("Internal Server Error")
                }
                else {
                    res.send({ ok: 1 })
                }
            })
        }
    })
})

module.exports = renameDoc