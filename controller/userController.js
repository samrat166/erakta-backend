const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");

const registerUser = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (user) {
    res.json({ message: "User already registered", status: "Error" });
  }

  try {
    let salt = await bcrypt.genSalt(12);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });
    res.json({ message: newUser, status: true });
  } catch (e) {
    res.json({ message: e.message, status: false });
  }
};

const loginUser = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });

  if (!user) {
    res.json({ message: "User doesnot exist", status: false });
  }
  try {
    let validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      res.json({ message: "password does not match", status: false });
    }
    const token = await jwt.sign(
      { _id: user._id },
      "kasdnasdaslkdandasdj89e2u3"
    );

    const validUser = {
      email: user.email,
      phoneNmber: user.phoneNumber,
      token: token,
      role: user?.role,
    };

    res.json({ data: validUser, status: true });
  } catch (e) {
    res.json({ message: e.message, status: false });
  }
};

const findAUser = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.json({ message: "No Email", status: false });
  }
  const user = await userModel.findOne({ email });
  res.json({ message: user, status: true });
};

module.exports = { registerUser, loginUser, findAUser };
