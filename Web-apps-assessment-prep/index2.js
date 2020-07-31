'use strict';

// ALT+SHIFT+F

function getLyrics(artist, title) {
  //dynamically generage the URL
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

  console.log(`Finding lyrics for ${title} by ${artist}`);

  return fetch(url)
    .then(response => {
      console.log(1);

      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    //.then(responseJson => displayResults(responseJson))
    .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}


function displayResults(responseJson) {
  console.log(responseJson);

  // const $results = $("#results");

  $("#results").empty();
  console.log("emptied");
  $("#results").append(`${responseJson.lyrics}`);

  $("#results").removeClass("hidden");
  console.log("displayed");
}


function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const artist = $("#query-artist").val();
    const title = $("#query-title").val();


    getLyrics(artist, title)
      .then(responseJson => displayResults(responseJson));
  });

}

$(watchForm);

