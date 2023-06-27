const express = require("express")
const COS = require('cos-nodejs-sdk-v5')
const axios = require("axios")

const config = require("../../config.json")

const renamePhoto = express.Router()

renamePhoto.get("/renamePhoto", (req, res) => {
    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.putObjectCopy({
        Bucket: 'acanphotos-1312302448',
        Region: 'ap-beijing',
        Key: req.query.newName,
        CopySource: 'acanphotos-1312302448' + ".cos." + 'ap-beijing' + ".myqcloud.com/" + req.query.oldName
    }, async function (err, data) {
        if (err) {
            res.status(404).send(`Cannot find the document ${req.query.oldName}`);
        } else {
            cos.deleteObject({
                Bucket: 'acanphotos-1312302448',
                Region: 'ap-beijing',
                Key: req.query.oldName
            }, function (_err, _data) {
                if (_err) {
                    res.status(500).send("Internal Server Error");
                } else {
                    res.send({ "ok": 1 })
                }
            })

        }
    })

})

module.exports = renamePhoto