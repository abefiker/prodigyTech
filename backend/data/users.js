const bcrypt = require('bcryptjs');

exports.seedUsers = async () => {
  const hashedPassword1 = await bcrypt.hash('password123', 10);
  const hashedPassword2 = await bcrypt.hash('password123', 10);

  return [
    {
      name: 'Abemelek Daniel',
      email: 'kidabemelek@gmail.com',
      password: hashedPassword1,
      isAdmin: false,
    },
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: hashedPassword2,
      isAdmin: true,
    },
  ];
};
