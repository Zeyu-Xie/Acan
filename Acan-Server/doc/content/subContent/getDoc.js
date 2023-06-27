const express=require("express")
const COS=require("cos-nodejs-sdk-v5")

const config=require("../../config.json")

const getDoc=express.Router()

getDoc.get("/getDoc", (req,res)=>{
    const cos=new COS({
        SecretId: config.apiKeys.tencentDeveloper.secretId,
        SecretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.getObject({
        Bucket: config.others.tencentDeveloper.bucket,
        Region: config.others.tencentDeveloper.region,
        Key: req.query.name
    }, (err,data)=>{
        if(err) {
            console.log(err)
            res.status(404).send("Not Found")
        }
        else {
            const bytes = Buffer.from(data.Body, 'hex')
            const jsCode=bytes.toString("utf8")
            res.send({
                "data": jsCode
            })
        }
    })
})

module.exports=getDoc