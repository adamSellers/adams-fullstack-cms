const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String
});

mongoose.model('users', userSchema);