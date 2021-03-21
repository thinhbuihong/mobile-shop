import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: "admin@gmail.com",
    password: bcrypt.hashSync('asdasd', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: "John@gmail.com",
    password: bcrypt.hashSync('asdasd', 10),
  },
  {
    name: 'Jane Doe',
    email: "Jane@gmail.com",
    password: bcrypt.hashSync('asdasd', 10),
  }
]

export default users;