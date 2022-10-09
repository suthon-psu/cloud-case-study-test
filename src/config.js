const isProd = process.env.NODE_ENV === 'production'

const cfg = {
  isProd,
  port: process.env.PORT ? parseInt(process.env.PORT) : 8000,
  groupName: process.env.GROUP_NAME || 'world',
}

module.exports = cfg;