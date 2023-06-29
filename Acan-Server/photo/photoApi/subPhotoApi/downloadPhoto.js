const express = require("express")
const COS = require('cos-nodejs-sdk-v5')

const config = require("../../config.json")

const downloadPhoto = express.Router()

downloadPhoto.get("/downloadPhoto", (req, res) => {
    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    });

    cos.getObject({
        Bucket: 'acanphotos-1312302448',
        Region: 'ap-beijing',
        Key: req.query.name
    }, function (err, data) {
        console.log(data)
        if (err) {
            res.status(404).send(`Cannot get the document ${req.query.name}`);
        } else {
            res.setHeader("Content-Disposition", `attachment; filename="${req.query.name}"`);
            res.send(data.Body);
        }
    })
})

module.exports = downloadPhoto