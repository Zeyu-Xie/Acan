const express = require('express')
const axios = require('axios')
const crypto = require("crypto")

const config = require("../../config.json")
const translate = express.Router()

translate.post("/translate", (req, res) => {
    const q = req.body.q
    const from = req.query.from
    const to = req.query.to
    const appid = config.apiKeys.baiduDeveloper.appid
    const salt = config.apiKeys.baiduDeveloper.salt
    const secretKey = config.apiKeys.baiduDeveloper.secretKey

    const md5Hash = crypto.createHash('md5')
    md5Hash.update(appid + q + salt + secretKey)
    const md5_32 = md5Hash.digest('hex')

    axios.get(`http://api.fanyi.baidu.com/api/trans/vip/translate?q=${q}&from=${from}&to=${to}&appid=${appid}&salt=${salt}&sign=${md5_32}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(_res => {
        res.json({ data: _res.data.trans_result[0].dst })
    }).catch(_err => {
        res.status(404).send("Not Found" + ": " + "Cannot get the translation")
    })
})

module.exports = translate