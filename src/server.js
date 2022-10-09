const express = require('express')
const conf = require('./config')
const cors = require('cors')

const app = express()
app.use(cors())

app.use('/api', require('./api'))


app.listen(conf.port, async () => {
  console.log(`Web server listening on port ${conf.port}`)
})