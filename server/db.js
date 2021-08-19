const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve('./urbanservices.db')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './urbanservices.db',
  },
  useNullAsDefault: true
})


knex.select('*').from('users')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex