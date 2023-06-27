const express = require("express")
const crypto = require("crypto")

const getMd5 = express.Router()

getMd5.post("/getMd5", (req, res) => {
    const md5Hash = crypto.createHash('md5')
    md5Hash.update(req.body.q)
    const md5_32 = md5Hash.digest('hex')
    const md5_16 = md5_32.slice(8, 24)
    const md5Object = {
        md5_32: md5_32,
        md5_16: md5_16
    }
    res.json(md5Object)
})

module.exports = getMd5