//No main
//Code runs left to right and top to bottom
console.log("HI AGAM :)");
// variable declare
// a is variable that can only contain an integer
// statically typed language
// int a;
// dynamically typed
// let -> a is variable that initially contains undefined
// Primitive types: number, string, boolean, undefined, null
let a;
//Number
a = 10;
a = 10.1;
// string
a = "string";
a = 'also string';
a = null;
console.log("a is", a);

//Javascript -> Created by Brenden Eich in 10 days -> Netscape browser k liye (2 year)
// JS Syntax is quite similar to javascript

// JS contains loops, conditionals, classes, functions, arrays

//input--> JS takes input in following way in array You had yo give input with command line
// Compile it --> node intro.js 23
// Output --> ['23'] 23 is prime
//Compile it --> node intro.js agam jain is good boy -->['agam', 'jain', 'is', 'good', 'boy']
let input = process.argv.slice(2);
console.log(input);
let num = input[0];
// let num = 23;
let flag = true;
for(let div = 2; div*div <= num; div++){
    if(num % div == 0){
        flag = false;
        break;
    }
}

if(flag == true){
    console.log(num, "is prime");
}else{
    console.log(num, "is not prime");
}
