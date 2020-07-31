'use strict';


function getLyrics(artist, title) {
  const url = `https://lyricsovh.docs.apiary.io/{artist}/{title}`;
  fetch
  .then
  throw
  .then
  catch
}

function displayResults(responseJson) {

}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const artist = $(".js-query-artist").val();
    const title = $(".js-query-title").val();
    getLyrics(artist, title)
  });
}

$(watchForm);

