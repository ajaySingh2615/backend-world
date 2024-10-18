const express = require("express");

const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const PORT = 8080;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/demo").then(() =>
  console.log("Mongodb connected")
);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// routes
app.use("/user", userRouter);

// port is listening
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
