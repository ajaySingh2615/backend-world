const fs = require("fs");

const userRouter = require("./routes/user");

const app = express();
const PORT = 8080;

mongoose
  .connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile(
    "log.txt",
    `${Date.now()}: ${req.method}: ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
});

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
