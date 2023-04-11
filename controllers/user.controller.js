import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your own account"));
  }

  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User Deleted");
};
export const getUser = () => {};
