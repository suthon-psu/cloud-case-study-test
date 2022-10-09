const express = require('express')
const router = express.Router()
const conf = require('./config')


router.get('/greet', async (req, res) => {
  res.send({msg: `Hello ${conf.groupName}`})
})

module.exports = router