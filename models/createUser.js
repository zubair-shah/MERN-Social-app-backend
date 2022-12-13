import mongoose from "mongoose";

const createUserSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("all users", createUserSchema);
export default Users;
