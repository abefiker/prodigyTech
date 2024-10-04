const express = require('express');
const router = express.Router();
const {
  authUser,
  registerUser,
  logoutUser,
} = require('../controller/userController');
const { protect } = require('../middlerware/authMiddleware');

router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(protect, logoutUser);
module.exports = router;
