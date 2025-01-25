import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// ========routes=========
import postRoutes from "#routes/posts";
import authRoutes from "#routes/auth";
// ====================================

const app = express();

app.use("*", cors());
//origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/", postRoutes);
app.use("/api/v1", authRoutes);

const CONNECTION_URL =
  "mongodb://localhost:27017/social-app";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listen at port http://localhost:${PORT}`);
      console.log("Database Connected SuccessFully");
    });
  })

  .catch((error) => {
    console.log(error.message);
  });
