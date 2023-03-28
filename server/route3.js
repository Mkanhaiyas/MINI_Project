import Express from "express";
import Message from "./messageSchema.js";
const router = Express.Router();

export const getPosts = async (req, res) => {
  try {
    const x = await Message.find();
    res.status(200).json(x);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const checkData = async (req, res) => {
  const { id_1, id_2, message } = req.body;
  try {
    const newMessage = await Message({
      id_1,
      id_2,
      message,
    }).save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

router.get("/", getPosts);
router.post("/", checkData);
export default router;
