// src/auth/user.js
import bcrypt from 'bcryptjs';

export const users = [
  {
    id: 1,
    username: 'admin',
    // Password: 'password123'
    password: bcrypt.hashSync('password123', 10)  // Using bcrypt to hash the password
  }
];
