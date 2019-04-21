var fnction = (process.argv[2]);

var parameter1 = (process.argv[3]);
parameter1.toString();

var parameter2 = (process.argv[4]);
// . operator means looking for a property or a method on the type of this variable
parameter1 = parseFloat(parameter1);
console.log(parameter1);
// not valid on a string 
parameter2 = parseFloat(parameter2);



if (fnction ==="add" || fnction === "addition") {
    var sum = parameter1 + parameter2
    console.log(sum);
} 
if (fnction === "subtract" || fnction === "subtraction") {
    var difference = parameter1 - parameter2;
    console.log(difference);
}
if (fnction === "multiply" || fnction === "times") {
    var product = parameter1 * parameter2;
    console.log(product);
}

if (fnction === "divide" || fnction === "division") {
    var dividend = parameter1 / parameter2;
    console.log(dividend)
} 
if (fnction === "remainder") {
    var remainder = parameter1 % parameter2;
    console.log(remainder);
}