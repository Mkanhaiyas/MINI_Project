import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  profession: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
