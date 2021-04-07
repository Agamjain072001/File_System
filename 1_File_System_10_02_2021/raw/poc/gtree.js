let fs = require("fs");

let root = {
    name: "d10",
    children: [
        {
            name: "d20",
            children: [{
                name: "d50",
                children: []
            },
            {
                name: "d60",
                children: []
            }]
        },
        {
            name: "d30",
            children: [{
                name: "d20",
                children: []
            }]
        },
        {
            name: "d40",
            children: []
        }
    ]
}

function printGtree(node, nsp){
    //print self
    console.log(nsp+node.name);
    //children loop
    for(let i = 0; i < node.children.length; i++){
        let child = node.children[i];
        printGtree(child, nsp+"\t");
    }
}
printGtree(root,"");

function displayGtree(node){
    let meNmyChild = ""+node.name+"=>";
    for(let i = 0; i < node.children.length; i++){
        let child = node.children[i].name;
        meNmyChild += child + ",";
    }
    console.log(meNmyChild);

    for(let i = 0; i < node.children.length; i++){
        let child = node.children[i];
        displayGtree(child);
    }
}
displayGtree(root);


function checkFileOrFolder(path){
    //from stackOverflow --> https://stackoverflow.com/questions/15630770/node-js-check-if-path-is-file-or-directory
    return fs.lstatSync(path).isFile();
}
function contentReader(path){
    //from stackOverflow
    return fs.readdirSync(path);
}


//printGtree(root, "")
function printFlat(path){
    // if this path is a file of directory
    // is file -> true
    // is file -> false
    let isFile = checkFileOrFolder(path);
    if(isFile == true){
        //console.log("path is a file") 
        //print file
        console.log(path,"*");
    }else{
        //name print
        //console.log("path is a directory")
        console.log(path);
        // may it contains something
        // content read
        let childrens = contentReader(path);
        // console.log(childrens);
        // call
        for(let i = 0; i < childrens.length; i++){
            printFlat(path + "\\" + childrens[i]);
        }
    }
}
// printFlat("D:\\Pepcoding\\Development\\Assignments\\Assignment 1\\1_File_System_10_02_2021\\raw\\poc\\client.js");
printFlat("D:\\Pepcoding\\Development\\Assignments\\Assignment 1\\1_File_System_10_02_2021\\raw\\poc\\f10");