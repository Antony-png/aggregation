const { Client } = require('pg')

const client = new Client({
  user: 'database',
  host: '127.0.0.1',
  database: 'employee',
  password: '123456',
})

client.connect()
module.exports = client
