const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  emailId: String,
  imageLink: String,
  role: { type: String, default: "contributor" },
  createdDate: {type: Date, required:true},
  lastUpdatedDate: {type: Date, required:true}
});

mongoose.model('users', userSchema);
