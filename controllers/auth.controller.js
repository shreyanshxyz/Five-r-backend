import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: "test",
      email: "test",
      password: "test",
      country: "test",
    });

    await newUser.save();
    res.status(201).send("User Created");
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {};

export const logout = async (req, res) => {};
