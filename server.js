const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/connectDb');
const app = express();
const userRoutes = require('./route/userRoutes');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDb();
app.get('/', (req, res) => {
  res.send('hello am from backend');
});
app.use('/api/users', userRoutes);
const port = process.env.PORT || 8088;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
