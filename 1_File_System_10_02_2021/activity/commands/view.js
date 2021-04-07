let fs = require("fs");
let path = require("path");

function viewHelper(dirName, mode){
    if(mode == "tree"){
        viewTree(dirName, "");
    }else if(mode == "flat"){
        viewFlat(dirName);
    }else{
        console.log("wrong mode type help for commands");
    }
}
module.exports = {
    fn: viewHelper
}

function isFileOrNot(src){
    return fs.lstatSync(src).isFile();             //--> Stack Overflow
}

function readContent(src){
    return fs.readdirSync(src);
}

function viewFlat(src){
    //How to find that if src is a file or folder?
    let  isFile = isFileOrNot(src);
    if(isFile == true){
        console.log(src + "*");
    }else{
        //print
        console.log(src);
        //content read from os
        let fDirnames = readContent(src);
        // console.log(fDirnames);
        //recursion
        for(let i=0;i<fDirnames.length;i++){
            let child = fDirnames[i];
            // good practice nhi hai aise path bnana
            // let dirNamepath = src + "//" + child;
            // good practice
            let dirNamepath = path.join(src, child);
            viewFlat(dirNamepath);
        }
    }
}


function viewTree(src, indent){
    //How to find that if src is a filr or folder?
    let  isFile = isFileOrNot(src);
    if(isFile == true){
        console.log(indent, path.basename(src), "*");
    }else{
        //print
        console.log(indent, path.basename(src));
        //content read from os
        let fDirnames = readContent(src);
        // console.log(fDirnames);
        //recursion
        for(let i=0;i<fDirnames.length;i++){
            let child = fDirnames[i];
            // good practice nhi hai aise path bnana
            // let dirNamepath = src + "//" + child;
            // good practice
            let dirNamepath = path.join(src, child);
            viewTree(dirNamepath, indent + "\t");
        }
    }
}