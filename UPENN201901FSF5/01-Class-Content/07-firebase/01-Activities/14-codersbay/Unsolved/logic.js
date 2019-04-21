// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
// var database = ...


// Initial Values
var config = {
  apiKey: "AIzaSyDEdyH81buu_XRZyLRSkLZB-JiAY2JbxxA",
  authDomain: "fir-1-ce36f.firebaseapp.com",
  databaseURL: "https://fir-1-ce36f.firebaseio.com",
  projectId: "fir-1-ce36f",
  storageBucket: "fir-1-ce36f.appspot.com",
  messagingSenderId: "696941206313"
};

firebase.initializeApp(config);
var database = firebase.database();

var clickCounter = 0;
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

var dog = 0;
// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {
console.log(snapshot.val())
  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
      }
      database.ref().set({
      highestBidder: highBidder,
      highestPrice: highPrice,
      // $("#highest-bidder").text(snapshot)
    })
    // highPrice = ...
    // highBidder = ...

    // Change the HTML to reflect the stored values


    // Print the data to the console.


  })
// 
  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  // else {

    // Change the HTML to reflect the initial values


    // Print the data to the console.


  // }


// If any errors are experienced, log them to console.
// }, function(errorObject) {
  // console.log("The read failed: " + errorObject.code);
// });

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  var bidderPrice = 0;
  var bidderName = "";
  // Get the input values
  

  // Log the Bidder and Price (Even if not the highest)
  bidderPrice = $("#bidder-price").val().parseInt(); 
  bidderName = $("bidder-name").val()
  if (bidderPrice > highPrice) {
    // if the form submitted has a bidder price higher than our bidder before, we update the highPrice, 
  highBidder = bidderName;
  highPrice = bidderPrice; 
  
    // Alert
    alert("You are now the highest bidder." + bidderName);

    // Save the new price in Firebase
    database.ref().set({
      highBidder: snapshot.val(highBidder),
      highPrice: snapshot.val(highPrice)
    })
    // Log the new High Price


    // Store the new high price and bidder name as a local variable


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
// 