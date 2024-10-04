const express = require('express')
const router = express.Router()
const {authUser,registerUser} = require('../controller/userController')

router.route('/')
.post(registerUser)
router.route('/auth').post(authUser)
module.exports = router