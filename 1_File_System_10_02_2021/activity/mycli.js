#!/usr/bin/env node
//^Shebang syntax

//node js import
let helperfile = require("./commands/help.js");
let viewfile = require("./commands/view.js");
let organizefile = require("./commands/organize.js");

let input = process.argv.slice(2);
// node mycli.js [view, dirname, tree]

let command = input[0];
//path
// console.log(process.cwd());      CURRENT WORKING DIRECTORY
// console.log(__filename);         CURRENT EXECUTING FILE PATH
// console.log(__dirname);          CURRENT EXECUTING DIRECTORY PATH
switch(command){
    case "view":
        viewfile.fn(input[1], input[2]);
        break;
    case "organize":
        organizefile.fn(input[1]);
        break;
    case "help":
        helperfile.fn();
        break;
    default:
        console.log("Invalid command type help for all commands");
        break;
}  


// Make file global
//npm init -y
//shebang syntax--->#!/usr/bin/env node
// bin property
// npm link
// npm unlink