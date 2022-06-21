const express = require('express')
const { getQr } = require('../controllers/getQr')


const router = express.Router()


router.use('/', getQr)

module.exports = { qr:router  }