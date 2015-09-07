$(document).ready(function() {

  var searchTerm = $('#search-term').val();
  var searchSpotify = $('#submit-search');
  var searchOption = $('#option');

//event listener
  searchSpotify.on('click', runSearch);
  
  function runSearch(e) {
    event.preventDefault(e)
    $.get("https://api.spotify.com/v1/search?q=' + search-term + '&type=' + searchOption", function(response){
      console.log(response);
    });
    console.log('Searching for something');
  }
});
