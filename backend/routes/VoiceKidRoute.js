const express = require('express')
const router = express.Router()
const voiceKidController = require('../controllers/VoiceKidController')

router.get('/get-regist-list', voiceKidController.getRegistList)
router.post('/addRegist', voiceKidController.addRegist)
router.post('/deleteRegist', voiceKidController.deleteRegist)
router.post('/changeStatus', voiceKidController.changeStatus)

module.exports = router