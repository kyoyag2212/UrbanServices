
const express = require('express')

// Import books-controller
const usersRoutes = require('./../controllers/login_controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/all' translates to '/books/all'
router.get('/all', usersRoutes.usersAll)
router.post('/login',usersRoutes.usersSelect)
router.post('/create',usersRoutes.userCreate)


// Export router
module.exports = router