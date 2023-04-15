import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only Sellers Can Create a Gig!"));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (err) {
    next(err);
  }
};
export const deleteGig = async (req, res, next) => {
  try {
    // We first check if the user ID of that gig is our ID, then only we can delete that gig.
    const gig = await Gig.findById(req.params.id);

    if (gig.userId !== req.userId)
      return next(createError(403, "Can delete only your gig"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig Deleted");
  } catch (err) {
    next(err);
  }
};
export const getGig = async (req, res, next) => {
  try {
    // We first check if the user ID of that gig is our ID, then only we can see that gig.
    const gig = await Gig.findById(req.params.id);
    if (!gig) next(createError(404, "Gig Not Found"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};
export const getGigs = async (req, res, next) => {
  const q = req.query;

  const filters = {
    ...(q.cat && { cat: q.cat }),
    // Firstly we check if we have minimum or maximum value
    // If we have even one of them we use them
    ...((q.min || q.max) && {
      price: { ...(q.min && { $gt: q.min }), ...(q.max && { $gt: q.max }) },
    }),
    title: { $regex: q.search, $options: "i" },
  };
  try {
    const gigs = await Gig.find(filters);
    res.status(200).send(gigs);
  } catch (err) {
    next(err);
  }
};
