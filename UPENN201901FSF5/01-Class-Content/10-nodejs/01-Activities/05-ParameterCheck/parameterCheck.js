const parameter1 = (process.argv[2]);
const parameter2 = (process.argv[3]);

function checkParameter(paramrter1, parameter2) {
    console.log(parameter1);
    console.log(parameter2);
    if (parameter1 === parameter2) {
        console.log("TRUE The two parameters are equal!");
    }   else {
        console.log("FALSE The two parameters are not equal");
    }
}

checkParameter();