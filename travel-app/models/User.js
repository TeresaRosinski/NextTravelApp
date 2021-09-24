const mongoose = require('mongoose');
const { Schema } = mongoose;
import TripSchema  from './Trip';

const UserSchema = new mongoose.Schema ({
  name: {
    type: String,
  }, 
  email: {
    type: String, 
  },
  trips : [TripSchema],
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);