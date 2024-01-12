const express = require("express")
const app = express()
app.use(express.json())
const path = require("path");

const dirPath = path.join(__dirname, "timestamp");

//content
const utc = new Date();

//Current Date
const date = utc.getDate();
//Current Month
const month = utc.getMonth()+1;
//Current Year
const year = utc.getFullYear();
//Current Hours
const hours = utc.getHours();
//Current Minutes
const min = utc.getMinutes();
//Current Seconds
const seconds = utc.getSeconds();
const timestamp = `The Current timestamp is Date(${year}-${month}-${date}), Indian Standard Time(${hours}:${min}:${seconds})`;
// new Date().toISOString();

//file
const fs = require("fs");
fs.writeFile(`${dirPath}.txt`, timestamp, function (err) { console.log("Success!!") });

//read file
let files = [];
fs.readdir("./", function (err, list) { files.push(list) })

//api endpoint
app.get("/", (req, res) => {
    res.json({ Files: { files } });
});

app.listen(3000);

