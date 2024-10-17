const fs = require("fs");

// this is a sync call
// fs.writeFileSync("./test.txt", "Hey! There");

// this is a async call
// fs.writeFile("./test.txt", "Hey! there", (err) => {});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });
// console.log(result);

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
