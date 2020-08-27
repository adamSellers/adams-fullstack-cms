const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  firstName: String,
  lastName: String
  // sfAccessToken: String,
  // sfUserString: String,
  // sfProfilePic: String,
  // sfInstanceUrl: String
});

mongoose.model('users', userSchema);