
const fs = require("fs");
const date = require("date-and-time");
let data = fs.readFileSync("iso_8859-1.txt", "utf8");

let exploded = data.split("\n");


let words = data.length;
let lines = exploded.length;
let now = new Date();
let dateData = date.format(now, 'MMM/DD/YYYY HH:mm');


let dataWords = ("Number of words :    " +words+   "    " 
+dateData+"\n");
let dataLines = ("Number of lines :    " +lines+   "     " +dateData+ 
"\n")


fs.appendFile("numberOfLines.txt", dataLines, function(err, datalines){
if(err) console.log(err);
console.log("Number of lines Successfuly written to the file")
});
fs.appendFile("numberOfLines.txt",  dataWords , function(err, 
datawords){
if (err) console.log(err);
console.log("Number of words successfuly Wriiten to the file");
});


// this file filename has a total of 105 lines
