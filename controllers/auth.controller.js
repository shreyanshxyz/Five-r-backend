import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10); // The 10 is the salt Number (Refer bcrypt docs)
    const newUser = new User({
      ...req.body, // What the spread operator does is that it takes all the data inside the body object as it is
      password: hash, // EXCEPT FOR THE PASSWORD WHICH WE MENTIONED LATER because it will get hashed
    });

    await newUser.save();
    res.status(201).send("User Created");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
