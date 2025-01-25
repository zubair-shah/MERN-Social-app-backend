import Users from "#models/createUser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const LoginUser = async (req, res) => {
  const data = req.body;
  const { email, password } = JSON.parse(JSON.stringify(data));
  const findUser = await Users.findOne({ email: email });
  try {
    if (findUser != null) {
      const isMatch = await bcrypt.compare(password, findUser.password);
      if (findUser.email === email && isMatch) {
        const token = jwt.sign({ user_ID: findUser._id }, "abcde", {
          expiresIn: "5d",
        });
        res.status(201).json({
          status: "succes",
          message: "Login succes",
          token: token,
        });
      } else {
        res.status(409).send({
          status: false,
          message: "Your Password is Incorrect",
        });
      }
    } else {
      res.status(404).send({
        status: false,
        message: "User not found Plz Enter correct email or password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: false,
      message: error.message,
    });
  }
};

export default LoginUser;
