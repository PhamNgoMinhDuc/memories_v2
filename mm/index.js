import Express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = Express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("App is running");
});

//const connection_url = "mongodb+srv://mduc:2582000@cluster0.wcj9t.mongodb.net/?retryWrites=true&w=majority";
//const port = process.env.PORT || 8000;

mongoose
  .connect("mongodb+srv://mduc:2582000@cluster0.wcj9t.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port: ${process.env.PORT || 8000}`);
    })
  )
  .catch((error) => console.log(error.messahe));
