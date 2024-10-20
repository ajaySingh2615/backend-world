const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connection");
const URL = require("./models/url");
const staticRoute = require("./routes/staticRouter");

const app = express();
const PORT = 8080;

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("MongoDb connected")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
