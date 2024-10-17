const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Request Recieved`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end("I am Ajay Singh");
        break;
      default:
        res.end("404");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server is listining on port 8000");
});
