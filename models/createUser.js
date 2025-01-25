import mongoose from "mongoose";

const createUserSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Users = mongoose.model("all users", createUserSchema);
export default Users;
