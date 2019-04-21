var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    console.log(URL);
  };
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + actor;
    console.log(URL);
    axios.get(URL).then(function(){
      var jsonData = response.data;
      console.log(jsonData);
    })
  }
};

module.exports = TV;
