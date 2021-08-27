
const express = require('express')

// Import login-controller
const usersRoutes = require('./../controllers/login_controller.js')

// Create router
const router = express.Router()


router.post('/all', usersRoutes.usersAll)
router.post('/login',usersRoutes.usersSelect)
router.post('/create',usersRoutes.userCreate)
router.post('/list',usersRoutes.serviceSearch)
router.post('/review',usersRoutes.reviewCreate)
router.post('/getdetails',usersRoutes.getUserDetails)
router.post('/updateemail',usersRoutes.updateUserEmail)
router.post('/updatenumber',usersRoutes.updateUserPhone)
router.post('/registerservice',usersRoutes.registerService)
router.post('/showservice',usersRoutes.showService)
router.post('/getreviewid',usersRoutes.getreviewid)
router.post('/getreviews',usersRoutes.getreviews)
router.post('/getcomments',usersRoutes.commentView)
router.post('/adminlogin',usersRoutes.adminLogin)
router.post('/admincomment',usersRoutes.commentCreate)
router.post('/adminviewcomments',usersRoutes.commentALLView)
router.post('/mylistings',usersRoutes.myListings)
router.post('/getavgrating',usersRoutes.getAvgRating)

// Export router
module.exports = router