import Users from "#models/createUser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userPasswordrestEmail = async (req, res) => {
  const { email } = req.body;
  if (email) {
    const user = await Users.findOne({ email: email });
    if (user) {
      const secret = user._id + "secret";
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "5m",
      });
      const link = `http://localhost:5000/api/users/${user._id}/${token}`;
      console.log(link);
      res.send({
        status: "success",
        message: "Password Reset Email Sent... Please Check Your Email",
      });
    }
  } else {
    res.status(400).json({
      error: "Email is required",
    });
  }
};
