// key : value pair

//to declare object
let obj={};


//Defining Object
let cap = {
    name:"Steve",
    lastName:"Rogers",
    friends:["tony","peter","bruce"],
    isAvenger: true,
    age: 35,
    address: {
        state: "New York",
        city: "Manhatten",
    },
    sayHi: function fn() {
        console.log("Cap say's Hi");
        return "cap send blessings";
    }
};

// Printing Object
console.log(cap);
console.log(cap.lastName);
console.log("My friends is ", cap.friends[1]);
console.log("City name is ", cap.address.city);
console.log("Address is", cap.address);
cap.sayHi();


console.log("Before");
console.log("Returned value is ", cap.sayHi());
console.log("After");

//for in loop
for(let key in cap){
    console.log("key: ", key, "value: ", cap[key]);
}


// If key is not present then we get undefined
console.log(cap.abc);


let key ="address";
console.log("address is", cap[key]);    //Prints address
console.log("address is", cap.key);     //Undefined     

// Prints keys but values undefined
for(let key in cap){
    console.log("key: ", key, "value: ", cap[key]);
}

//Update objects
console.log(cap);
cap.isAvenger = false;
console.log("-------------------------");
cap.movies = ["First Avenger", "Civil War"];
console.log(cap);

//Delete objects
delete cap.age;
console.log(cap);