import Express from "express";
import mongoose from "mongoose";
import PostMessage from "./schema.js";
const router = Express.Router();

// const postSchema = mongoose.Schema({
//   profession: String,
//   firstname: String,
//   lastname: String,
//   email: String,
//   password: String,
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });
// var PostMessage = mongoose.model("PostMessage", postSchema);

export const getPosts = async (req, res) => {
  try {
    const x = await PostMessage.find();
    res.status(200).json(x);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const x = await PostMessage.findById(id);
    res.status(200).json(x);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { profession, firstname, lastname, email, password } = req.body;
  try {
    const newPostMessage = await PostMessage({
      profession,
      firstname,
      lastname,
      email,
      password,
    }).save();
    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, selectedFile, creator, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);
  const updatedPost = { title, message, selectedFile, creator, tags, _id: id };
  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Id is Invalid");
  await PostMessage.findByIdAndDelete(id);
  res.json({ message: "Post Deleted Successfully." });
};

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
