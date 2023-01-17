const mongoose = require("mongoose")

const User = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"')
        }
      },
    },
  },
  { timestamp: true }
)

module.exports = mongoose.model("users", User)
