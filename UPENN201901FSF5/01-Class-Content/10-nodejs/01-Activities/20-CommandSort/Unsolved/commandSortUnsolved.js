// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// make array to hold the numbers 
var numbers = [100, 101, 10, 100];

numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
