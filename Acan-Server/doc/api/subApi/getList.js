const express = require("express")
const COS = require("cos-nodejs-sdk-v5")

const config = require("../../config.json")

const getList = express.Router()

getList.get("/getList", (req, res) => {
    const cos = new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.getBucket({
        Bucket: config.others.tencentDeveloper.bucket,
        Region: config.others.tencentDeveloper.region
    }, (err,data)=>{
        if(err) {
            console.log(err)
            res.status(404).send("Not Found")
        }   
        else {
            res.send(data)
        }
    })
})

module.exports=getList