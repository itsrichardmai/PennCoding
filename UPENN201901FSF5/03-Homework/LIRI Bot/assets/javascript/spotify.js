var axios = require("axios");

var Spotify = require('node-spotify-api');

var song = "Example Song";

// spotify keys 
var spotify = new Spotify({
  id: "0c1c366fa1db467599f6fe557de2c614",
  secret: "a76c3ae060f64f54b655c590205f10d2",
  song: song
});
 
spotify
.search({ type: 'track', query: 'All the Small Things', limit: 1 })
.then(function(data) {

  console.log(data.tracks.items[0]);
  var songData = {
    name: data.tracks.items[0].name,
    popularity: data.tracks.items[0].popularity,
    url: data.tracks.items[0].href,
    album: data.tracks.items[0].album
  }

  console.log(songData)
  
  
})
.catch(function(err) {
  console.log(err);
});

  