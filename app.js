const fs = require("fs");
const path = require("path");

fs.mkdirSync("node-exercise");

const node = path.resolve(__dirname, "node-exercise");
const backdoor = path.join(node, "main.js");

// console.log(`path to node-exercise directory: ${node}`);

//Task 2

const backdoorText = `console.log("Hello, World!")`;

const MyProposal = () => {
  fs.writeFileSync(backdoor, backdoorText, "utf-8");
  console.log("success");
};

// MyProposal();

//read file

const readFile = () => {
  fs.readFileSync(backdoor, "utf-8");
  console.log("Contents");
};

// readFile();

//append

const appendFile = () => {
  fs.appendFileSync(backdoor, "\nThis is my first Node.js program");
  console.log("Node Program");
};

// appendFile();

// read append file

const readAppend = () => {
  fs.readFileSync(backdoor, "utf-8");
  console.log(`contents of main.js file: ${appendFile()}`);
};

// readAppend();

//Renaming and Deleting

const newBack = path.join(node, "index.js");

const Named = () => {
  fs.renameSync(backdoor, newBack);
  console.log("Renamed");
};

// Named();

//delete

const deleted = () => {
  fs.unlinkSync(newBack);
  console.log("deleted");
};

// deleted();

const deleteFile = () => {
  fs.rmdirSync(node);
  console.log("gone");
};

// deleteFile();
