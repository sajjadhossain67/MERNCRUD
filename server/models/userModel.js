
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  companyName: String,
  phone: String,
  email: String,
  password: String, // Hashed password should be stored here
  location: String,
  link: String,
  description: String,
});

// Add methods, like password comparison, to the schema
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
