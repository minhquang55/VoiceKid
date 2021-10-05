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

  addRegist: async (req, res) => {
    try {
      let {parent_name, telephone, address, email} = req.body
      await voiceKidDb.addRegist({parent_name, telephone, address, email})
      res.status(200).json({parent_name, telephone, address, email})
    } catch (e) {
      res.status(400).json(fmt.respone_api(false, e, {}))
    }
  },

  deleteRegist: async(req, res) => {
    try {
      let { id } = req.body
      await voiceKidDb.deleteRegist({id})
      res.status(200).json(`User ${id} deleted`)
    } catch (e) {
      res.status(400).json(fmt.respone_api(false, e, {}))
    }
  },

  changeStatus: async(req, res) => {
    try {
      let { id, isConfirmed } = req.body
      await voiceKidDb.changeStatus({id, isConfirmed})
      res.status(200).json(`User ${id} updated`)
    } catch (e) {
      res.status(400).json(fmt.respone_api(false, e, {}))
    }
  }
}

