const express = require("express")
const COS = require('cos-nodejs-sdk-v5')

const config = require("../../config.json")

const getList = express.Router()

getList.get("/getList", (req, res) => {

    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.getBucket({
        Bucket: config.others.tencentDeveloper.Bucket,
        Region: config.others.tencentDeveloper.Region
    }, function (err, data) {
        if (err) {
            console.log(err)
            res.status(404).send("Not Found");
        } else {
            data.Contents.forEach((item, index) => { //Standardize the "Modified Time" column

                const date = item.LastModified
                const year = date.slice(0, 4)
                const month = date.slice(5, 7)
                const day = date.slice(8, 10)
                const hours = date.slice(11, 13)
                const minutes = date.slice(14, 16)
                const seconds = date.slice(17, 19)
                item.LastModified = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds

                let size = parseFloat(item.Size) //Standardize the "Size" column
                let sizeString = "B"
                if (size >= 1024) {
                    size = size / 1024
                    sizeString = "KB"
                }
                if (size >= 1024) {
                    size = size / 1024
                    sizeString = "MB"
                }
                if (size >= 1024) {
                    size = size / 1024
                    sizeString = "GB"
                }
                if (size >= 1024) {
                    size = size / 1024
                    sizeString = "TB"
                }
                if (size >= 1024) {
                    size = size / 1024
                    sizeString = "PB"
                }
                item.size = size.toFixed(2) + " " + sizeString
            })

            res.send({ data: data.Contents })
        }
    })
})

module.exports = getList