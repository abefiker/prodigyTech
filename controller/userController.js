const User = require('../model/userModel');
const asyncHandler = require('../middlerware/asyncHandler');

const generateToken = require('../utils/generateToken');
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Debugging log for input
  const user = await User.findOne({ email });

  console.log(user.email, ' user found'); // Debugging log when user is found
  if (user && (await user.comparePassword(password))) {
    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(user._id, res);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
module.exports = { authUser, registerUser };
