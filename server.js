const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const connectDb = require('./config/connectDb');
const app = express();
connectDb()
app.get('/', (req,res)=>{
    res.send('hello am from backend')
})
const port = process.env.PORT || 8088
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})