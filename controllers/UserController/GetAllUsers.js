import Users from "#models/createUser";

const getAllUsersController = async (req, res) => {
  try {
    const allusers = await Users.find();
    res.status(200).json(allusers);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export default getAllUsersController;
