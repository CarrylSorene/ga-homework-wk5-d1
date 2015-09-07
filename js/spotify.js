$(document).ready(function() {

  var searchTerm = $('#search-term'); //input text
  var searchOption = $('#option'); //dropdown option
  var submitSearch = $('#submit-search'); //submit button
  var results = $("#results");

  //event listener
  searchOption.on('change', runSearch);
  submitSearch.on('click', runSearch);
  
  function runSearch(e) {
    event.preventDefault(e)

    // console.log(searchTerm, searchOption, submitSearch);

    $.get('https://api.spotify.com/v1/search?q=' + searchTerm.val() + '&type=' + searchOption.val(), function(response){

      results.empty()

      console.log(response);

      var alteredType = searchOption.val() + "s" //in object, has an s

      //get inside object - [string in object]
      $.each(response[alteredType].items, function(index, alteredType) {
        var result = $("<div id = 'results'>" + alteredType.name + "</div>");
        results.append(result);
      });
    })
    // console.log('Searching for something');
  }
});
