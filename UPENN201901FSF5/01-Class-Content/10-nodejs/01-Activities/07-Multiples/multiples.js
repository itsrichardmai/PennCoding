var input = process.argv

var userInput = parseInt(input[2]);

if (userInput >= 6) {
    multiplesBelowNum = userInput/ 6;
    multiplesBelowNum = parseInt(multiplesBelowNum);
    multiples(multiplesBelowNum);
}
function multiples() {
    for (var i = 1; i < multiplesBelowNum; i++ ){
    var returnValue = 0;
    returnValue = returnValue + (6*i) ;
    console.log(returnValue);
    }
}