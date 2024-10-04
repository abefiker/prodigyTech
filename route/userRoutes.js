const express = require('express')
const router = express.Router()
const {authUser,registerUser,logoutUser} = require('../controller/userController')

router.route('/')
.post(registerUser)
router.route('/auth').post(authUser)
router.module('/logout').post(logoutUser)
module.exports = router