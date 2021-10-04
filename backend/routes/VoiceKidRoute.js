const express = require('express')
const router = express.Router()
const voiceKidController = require('../controllers/VoiceKidController')

router.get('/get-regist-list', voiceKidController.getRegistList)

module.exports = router