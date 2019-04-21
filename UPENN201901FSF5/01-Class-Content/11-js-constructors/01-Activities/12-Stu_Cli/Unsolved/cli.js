// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for
var searchTerm = process.argv[2]

var term = process.argv.slice(3).join(" "); 

if (!search) {
    search = "show";
}

if (!term) {
    term = "Game of Thrones";
}

if (search === "show") {
    console.log("Searching for TV Show");
}