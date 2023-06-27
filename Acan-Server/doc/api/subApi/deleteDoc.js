const express=require("express")
const COS=require("cos-nodejs-sdk-v5")

const config=require("../../config.json")

const deleteDoc=express.Router()

deleteDoc.get("/deleteDoc",(req,res)=>{
    const cos=new COS({
        secretId: config.apiKeys.tencentDeveloper.secretId,
        secretKey: config.apiKeys.tencentDeveloper.secretKey
    })
    cos.deleteObject({
        Bucket: config.others.tencentDeveloper.bucket,
        Region: config.others.tencentDeveloper.region,
        Key: req.query.name
    },(err,data)=>{
        if(err) {
            console.log("ERROR",err)
            res.status(500).send("Internal Server Error")
        }
        else {
            res.send({ok: 1})
        }
    })
})

module.exports=deleteDoc