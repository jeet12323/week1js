 Var: function
testScope() {
var variable = "Hello, world!";
} testScope(); console.log(variable); // Output:
"Hello, world!"
Output:
"Hello, world!"
// let:
function testScope() {
let variable = "Hello, world!";
} testScope();
console.log(variable);

function testScope() {
    const variable = "Hello, world!";
    }
    testScope();
    console.log(
    variable);


    //hoisting
    x = 5; // Assign 5 to x
elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x; // Display x in the element
var x; // Declare x
carName = "Volvo";
let carName;