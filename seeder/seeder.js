const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const User = require('../model/userModel');
const colors = require('colors')
const connectDb = require('../config/connectDb')
connectDb()
// Connect to MongoDB


// Define the seeder function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();

    // Generate and insert new users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = new User({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
      users.push(user);
    }
    await User.insertMany(users);

    console.log('Database seeded successfully!'.bgYellow.green);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:'.bgRed, error);
    process.exit(1);
  }
};
const destroyDatabase =async ()=>{
    try {
        await User.deleteMany();
        console.log('Database destroyed successfully!'.bgCyan.blue);
        process.exit(0);
    } catch (error) {
        console.error('Error destroying database:'.bgRed, error);
        process.exit(1);
    }
}
// Call the seeder function
if(process.argv[2]==='import'){
    seedDatabase();
}else{
    destroyDatabase();
}