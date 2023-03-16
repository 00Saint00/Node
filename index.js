const fs = require("fs");
const path = require("path");

// fs.mkdirSync("node-exercise");
// fs.mkdirSync("./node-exercise/data");

const test = path.resolve(__dirname, "./node-exercise/data");
const Bonus = path.join(test, "data.txt");

const BonusText = `Node is stressing me out`;

const myText = () => {
  fs.writeFileSync(Bonus, BonusText, "utf-8");
  console.log("success");
};

// console.log(`path to node-exercise directory: ${test}`);

// myText();

//rename
const newTest = path.join(test, "config.txt");

const Rename = () => {
  fs.renameSync(Bonus, newTest);
  console.log("Renamed");
};

// Rename();

//delete file
const deleted = () => {
  fs.unlinkSync(newTest);
  console.log("deleted");
};

// deleted();

//delete folder
const deleteFile = () => {
  fs.rmdirSync(test);
  console.log("gone");
};

deleteFile();
