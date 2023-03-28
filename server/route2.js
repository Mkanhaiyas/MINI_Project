import Express from "express";
import PostMessage from "./schema.js";
//import jwt from "jsonwebtoken";
const router = Express.Router();

export const checkData = async (req, res) => {
  const { profession, email, password } = req.body;
  try {
    const verify = await PostMessage.findOne({
      profession: profession,
      email: email,
      password: password,
    });
    if (!verify) {
      res.json("Invalid Login");
    } else {
      //const token = jwt.sign({ verify }, "KanhaSecret");
      res.json({ status: "ok", User: verify._id });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

router.post("/", checkData);
export default router;
