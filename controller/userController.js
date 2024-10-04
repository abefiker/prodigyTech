const User = require('../model/userModel');
const asyncHandler = require('../middlerware/asyncHandler');
const authUser = asyncHandler(async (req, res) => {
  res.send('auth user');
});
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});
module.exports = { authUser, registerUser };
