const User = require('../model/userModel');
const asyncHandler = require('../middlerware/asyncHandler');

const generateToken = require('../utils/generateToken');
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for missing email or password
  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide both email and password');
  }

  console.log(email, password); // Debugging log for input
  const user = await User.findOne({ email });

  console.log(user.email, ' user found'); // Debugging log when user is found
  if (user && (await user.comparePassword(password))) {
    generateToken(user._id,res)
    
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    // If password is incorrect
    console.log('Password mismatch');
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});
module.exports = { authUser, registerUser };
