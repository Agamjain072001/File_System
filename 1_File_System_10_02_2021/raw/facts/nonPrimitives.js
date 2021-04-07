// functions, arrays,objects
// function definition
function sayHi(param){
    console.log("Hey there, I am functions");
    console.log("Param is", param);
    let rVal = Math.random()>0.5?"good":false;
    return rVal;
    // If no value returned then it return undefined
}

// function invoked
sayHi(10);
sayHi("Agam");
let rVal = sayHi([1,2,3,4,5]);
console.log(rVal);


// arrays
// arrays -> array is a collection of homogeneous data types
// array -> array is a collection of anything
// array declare

let arr = [
    1, 
    1.1,
    "string",
    'single quotes', 
    null, 
    true, 
    [1, 2, 3, 4, 5],
    function inside() {
        console.log("Hello from an array");
        return "some value";
    },
    { name: "Agam", lastName: "Jain" },
];

console.log(arr);
console.log("val at index 5", arr[5]);
console.log("val at index 6", arr[6][3]);
console.log("last val", arr[arr.length-1]);
console.log("last val", arr[arr.length-1].name);

//function
console.log(arr[arr.length-2]);
console.log("returned value", arr[arr.length-2]("hola"));
console.log(arr[arr.length-2]());

// If index is not present in array then it return undefined
console.log(arr[arr.length]);


// push --> add Last
console.log(arr);
arr.push("last val");
conosle.log(arr);
// pop --> remove last
//unshift --> add first
//shift --> remove first


// slice --> copies array from startIndex to endIndex-1
let slicedArr = arr.slice(2, 5);
console.log("Sliced Array", slicedArr);

// splice --> deletes elements from array from given index and deletes the count of values given
let removedElementArr = arr.splice(2, );
console.log("RemovedElementArr", removedElementArr);
console.log("arr", arr);

for(let i=0; i < arr.length; i++){
    console.log("index ",i,"value ", arr[i]);
}