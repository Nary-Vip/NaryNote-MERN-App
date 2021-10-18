const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: { 
        type: "string",
        required: true,
    },
    description: {
        type: "string",
        required: true,
    },
    tags:{
        type: "string",
        required: true,
        default: "general"
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('notes', noteSchema);