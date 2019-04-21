




// var search = "xxx"
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=3OgTBR9VBGqGZNi3"

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// });

// 1) User inputs into fields
// 2) Set qualifiers
// 3) When search key is hit Ajax call goes out 
// 4) The results get appended to the container of "top articles"
// 5) When the clear results button gets hit empty the append



function search() {
    // We'll get this term from the html, volcano is an example
    var searchTerm = "volcano"

    // URL for query
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=8rIHtNiwablwA8gXOUajlUElVelWsEh1";

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // AJAX function
        .then(function (ajaxResponse) {
            

            // console.log(ajaxResponse)


            // We'll get the number from the text box
            var numbofRecords = 5;

            
            for (i = 0; i < numbofRecords; i++) {
                // View the title
                console.log(ajaxResponse.response.docs[i]);
                // View the URL
                console.log(ajaxResponse.response.docs[i].web_url);
            }

            // Number of records = -1


        });
};

// Test call the method 
search();