import Users from "#models/createUser";
import bcrypt from "bcrypt";

const createUserController = async (req, res) => {
  const data = JSON.parse(JSON.stringify(req.body));
  console.log(data);

  const userAlready = await Users.findOne({ email: data.email });
  try {
    if (userAlready) {
      return res
        .status(409)
        .json({ status: false, message: "User have already an account" });
    }
    const newUser = new Users(data);
    const salt = bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, parseInt(salt));
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default createUserController;
