import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./route.js";
import showRoutes from "./route2.js";
import messageRoutes from "./route3.js";
const app = Express();
app.use(Express.json());
app.use(cors());
app.use("/posts", postRoutes);
app.use("/logdata", showRoutes);
app.use("/message", messageRoutes);

const ATLAS_URI =
  "mongodb+srv://mkanhaiyas:mkanhaiyas149@studentrecord.3hcnmbd.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;
mongoose
  .connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("Successfully Connected to Mongodb"))
  .catch((err) => console.log(err));

mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.send("Hello Everyone");
});

app.listen(port, (err) => {
  if (err) console.log("Error while Connecting to PORT: 5000");
  console.log("Server is running on port 5000");
});
