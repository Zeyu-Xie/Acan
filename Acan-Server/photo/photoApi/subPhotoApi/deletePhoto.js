const express = require("express")
const COS = require('cos-nodejs-sdk-v5')

const config = require("../../config.json")

const deletePhoto = express.Router()

deletePhoto.get("/deletePhoto", (req, res) => {
    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    });

    cos.deleteObject({
        Bucket: 'acanphotos-1312302448',
        Region: 'ap-beijing',
        Key: req.query.name
    }, function (err, data) {
        if (err) {
            res.status(404).send("Not Found");
        } else {
            res.send({ "ok": 1 })
        }
    });
})

module.exports = deletePhoto