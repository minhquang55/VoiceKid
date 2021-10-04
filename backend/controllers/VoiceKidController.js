const voiceKidDb = require('../mysql/VoiceKidDb')
const fmt = require('../tools/format')

module.exports = {
  getRegistList: async (req, res) => {
    try {
      var rows = await voiceKidDb.getRegistList()
      res.status(200).json(fmt.respone_api(true, {}, rows))
    } catch (e) {
      res.status(400).json(fmt.respone_api(false, e, {}))
    }
  },
}