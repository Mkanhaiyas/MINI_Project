import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  id_1: String,
  id_2: String,
  message: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
var Message = mongoose.model("Message", messageSchema);
export default Message;
