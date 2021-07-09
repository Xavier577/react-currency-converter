const fs = require("fs");
const path = require("path");
const mockData = require("./db");

fs.writeFile(
  path.join(__dirname, "db.json"),
  JSON.stringify(mockData),
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
