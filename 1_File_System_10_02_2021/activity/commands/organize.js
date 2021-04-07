let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4","mkv","mp3"],
    archives: ['zip','7z','rar','tar','gz','ar','iso','xz'],
    documents: ['docx', 'doc', 'pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app: ['exe','dmg','pkg','deb'],
}

function isFileOrNot(src){
    return fs.lstatSync(src).isFile();             //--> Stack Overflow
}

function readContent(src){
    return fs.readdirSync(src);
}


 function checkExtension(path){
     let ext = path.split(".").pop();
    //  console.log(ext);
     for(let key in types){
         for(let i=0;i<types[key].length;i++){
             if(ext == types[key][i]){
                 return key;
             }
         }
     }
     return "others";
 }

function sendFile(src, dest, folderName){
    let folderToMake = path.join(dest, folderName)
    if(fs.existsSync(folderToMake) == false){
        fs.mkdirSync(folderToMake);
    }
    let pathofdestFile = path.join(folderToMake, path.basename(src));
    fs.copyFileSync(src, pathofdestFile);
}

function organize(src, dest){
    let isFile = isFileOrNot(src);
    if(isFile == true){
        //extension check
        let folderName = checkExtension(src);
        // console.log(folderName);
        //copy files
        sendFile(src, dest, folderName);
    }else{
        let fDirnames = readContent(src);
        for(let i=0;i<fDirnames.length;i++){
            let child = fDirnames[i];
            // good practice nhi hai aise path bnana
            // let dirNamepath = src + "//" + child;
            // good practice
            let dirNamepath = path.join(src, child);
            organize(dirNamepath, dest);
        }
    }
}


function organizefn(src){
     //src -> create folder
     if(src == undefined){
         src = process.cwd();
     }
     let folderToMake = path.join(src, "Organized_files");
     if(fs.existsSync(folderToMake) == false){
         fs.mkdirSync(folderToMake);
     }
     organize(src, folderToMake);
}

module.exports = {
    fn: organizefn
}