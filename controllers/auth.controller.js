import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10); // The 10 is the salt Number (Refer bcrypt docs)
    const newUser = new User({
      ...req.body, // What the spread operator does is that it takes all the data inside the body object as it is
      password: hash, // THEN THE PASSWORD IS MENTIONED LATER because it will REPLACE THE PLAIN TEXT WITH THE HASHED PASSWORD
    });

    await newUser.save();
    res.status(201).send("User Created");
  } catch (err) {
    res.status(500).send(err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User Not Found");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong username/password");

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const logout = async (req, res) => {};
