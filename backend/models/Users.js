const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { 
        type: "string"
    },
    username: {
        type: "string",
        required: true,
        unique: true
    },
    email: {
        type: "string",
        required: true,
        unique: true
    },
    password:{
        type: "string",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  const User = mongoose.model('user', userSchema);
  module.exports = User;