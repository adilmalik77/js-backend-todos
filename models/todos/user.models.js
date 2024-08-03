import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    // username: String,
    // email: String,
    // isActive: Boolean

    username: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true
    },
    password: {
      type: String,
      required: true
      unique: true
    }
 },{timestamps: true}
)

export const User = mongoose.model("User", userSchema)