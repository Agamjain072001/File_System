function f3(){
    console.log(" I am F3");
    while(true) { }
    return "returned from f3";
}

function f2() {
    console.log("I am F2");
    return "returned from F2";
}

function f1(){
    console.log("F1 was called");
    return "returned from f1";
}

console.log("Returned value is ", f1(), f2(), f3());


// All things in JS is evaluated from left to right
// So firstly when we call f1() it runs and prints f1 was called and returns its value at place of f1
// then f2 is evaluated and it prints I am F2 and returrns its value at place of f2
// then f3 is evaluated and print I am f3 and goes infinite
// If there is no infinite loop then it returns its value
//  Then at the end console.log line is printed

// function f3(){
//     console.log(" I am F3");
//     return "returned from f3";
// }

// function f2() {
//     console.log("I am F2");
//     f3();
//     return "returned from F2";
// }

// function f1(){
//     console.log("F1 was called");
//     f2();
//     return "returned from f1";
// }

// console.log("Returned value is ", f1());

//Output
//F1 was called
//I am F2
//I am F3
// Returned value is returned from f1