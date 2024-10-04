const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('error: ' + error.message);
    process.exit(1);
  }
};
module.exports = connectDb;
