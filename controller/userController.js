const User = require('../model/userModel')
const authUser = async(req,res)=>{
    res.send('auth user')
}
const registerUser = async(req,res)=>{
    res.send('register user')
}
module.exports = {authUser, registerUser}
