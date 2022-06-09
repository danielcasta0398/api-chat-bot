const express = require('express');
const { sendMessage } = require('../controllers/sendMessagge');

const router = express.Router();


router.post('/', sendMessage)

module.exports = { sendRouter : router };