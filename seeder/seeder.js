const mongoose = require('mongoose');
const User = require('../model/userModel'); // Import users array from the local file
const { seedUsers } = require('../data/users'); // Update the import path accordingly
const colors = require('colors');
const connectDb = require('../config/connectDb');

// Connect to MongoDB
connectDb();

const seedDatabase = async () => {
  try {
    const users = await seedUsers(); // Await the function to get hashed passwords
    await User.insertMany(users);

    console.log('Database seeded successfully!'.green);
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

const destroyDatabase = async () => {
  try {
    await User.deleteMany();
    console.log('Database destroyed successfully!'.bgCyan.blue);
    process.exit(0);
  } catch (error) {
    console.error('Error destroying database:'.bgRed, error);
    process.exit(1);
  }
};

// Call the appropriate function based on the command
if (process.argv[2] === 'import') {
  seedDatabase();
} else {
  destroyDatabase();
}
