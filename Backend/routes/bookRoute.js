const express = require('express')
const router = express.Router()
const {addToWishList, getWishList, removeFromWishList } = require('../controllers/bookController.js')
const { isAuthenticatedUser } = require('../middleware/auth')



router.route("/addtowishlist").post( isAuthenticatedUser,addToWishList)
router.route("/getwishlist").post(isAuthenticatedUser, getWishList)
router.route("/remfromwishlist").post(isAuthenticatedUser, removeFromWishList)
module.exports =router