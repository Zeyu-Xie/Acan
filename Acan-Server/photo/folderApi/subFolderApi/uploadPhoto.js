const express = require("express")
const COS = require('cos-nodejs-sdk-v5')
const fs = require("fs")
const multer = require("multer")

const config = require("../../config.json")

const uploadPhoto = express.Router()

const upload = multer({
    storage: multer.diskStorage({
        destination: "./temp",
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
}).single("file")

uploadPhoto.post("/uploadPhoto", upload, (req, res) => {

    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.putObject({
        Bucket: config.others.tencentDeveloper.Bucket,
        Region: config.others.tencentDeveloper.Region,
        Key: req.file.originalname,
        StorageClass: 'STANDARD',
        Body: fs.readFileSync("./temp/" + req.file.originalname),
    }, function (err, data) {
        fs.unlinkSync("./temp/" + req.file.originalname, _err => {
            console.log("ERROR", _err)
        })
        if (err) {
            res.status(403).send("Forbidden")
        }
        else {
            res.send({ "ok": 1 })
        }
    })

})

module.exports = uploadPhoto
