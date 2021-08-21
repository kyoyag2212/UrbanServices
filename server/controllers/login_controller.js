const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'urbanservices.db',
  },
  useNullAsDefault: true
})


// Retrieve all books
exports.usersAll = async (req, res) => {
   
  // Get all books from database
  knex.select('*') // select all records
    .from('users') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

exports.usersSelect = async (req, res) => {
   
  // Get all books from database
  knex('users')
  .where({ username:req.body.username })
  .pluck('password')
    .then(userData => {
      // Send books extracted from database in response
      if(userData==req.body.password){
         res.json({ message: `successful` })
      }
      else{
        res.json({ message: 'incorrect' })
      }
      
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving users: ${err}` })
    })
}

// Create new book
exports.userCreate = async (req, res) => {
 
  // Add new book to database
  knex('users')
    .insert({ // insert new record, a book

      'username': req.body.username,
      'password': req.body.password,
      'user_type': req.body.user_type,
      'email': req.body.email,
      'u_phoneno': req.body.u_phoneno,
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: 'registered' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating def user: ${err}` })
    })
}

// // Create new book
// exports.booksCreate = async (req, res) => {
//   // Add new book to database
//   knex('books')
//     .insert({ // insert new record, a book
//       'author': req.body.author,
//       'title': req.body.title,
//       'pubDate': req.body.pubDate,
//       'rating': req.body.rating
//     })
//     .then(() => {
//       // Send a success message in response
//       res.json({ message: `Book \'${req.body.title}\' by ${req.body.author} created.` })
//     })
//     .catch(err => {
//       // Send a error message in response
//       res.json({ message: `There was an error creating ${req.body.title} book: ${err}` })
//     })
// }

// // Remove specific book
// exports.booksDelete = async (req, res) => {
//   // Find specific book in the database and remove it
//   knex('books')
//     .where('id', req.body.id) // find correct record based on id
//     .del() // delete the record
//     .then(() => {
//       // Send a success message in response
//       res.json({ message: `Book ${req.body.id} deleted.` })
//     })
//     .catch(err => {
//       // Send a error message in response
//       res.json({ message: `There was an error deleting ${req.body.id} book: ${err}` })
//     })
// }

// // Remove all books on the list
// exports.booksReset = async (req, res) => {
//   // Remove all books from database
//   knex
//     .select('*') // select all records
//     .from('books') // from 'books' table
//     .truncate() // remove the selection
//     .then(() => {
//       // Send a success message in response
//       res.json({ message: 'Book list cleared.' })
//     })
//     .catch(err => {
//       // Send a error message in response
//       res.json({ message: `There was an error resetting book list: ${err}.` })
//     })
// }