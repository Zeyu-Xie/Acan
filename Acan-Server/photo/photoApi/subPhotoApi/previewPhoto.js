const express = require("express")
const COS = require('cos-nodejs-sdk-v5')

const config = require("../../config.json")

const previewPhoto = express.Router()

previewPhoto.get("/previewPhoto", (req, res) => {

    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })

    cos.getObject({
        Bucket: 'acanphotos-1312302448',
        Region: 'ap-beijing',
        Key: req.query.name
    }, function (err, data) {
        if (err) {
            res.status(404).send(`Cannot get the document ${req.query.name}`);
        } else {
            res.end(data.Body, "binary");
        }
    })
})

module.exports = previewPhoto