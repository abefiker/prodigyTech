const asyncHandler = require('./asyncHandler');
const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const protect = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.user._id).select('-password');
      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not authorized, token is failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin');
  }
};
module.exports = { protect, admin };
