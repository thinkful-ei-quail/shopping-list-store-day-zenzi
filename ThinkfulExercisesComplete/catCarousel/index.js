/* eslint-disable no-console */
'use strict';


function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(event) {
    const imgSrc = $(event.currentTarget).find('img').attr('src');
    const imgAlt = $(event.currentTarget).find('img').attr('alt');
    $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
    console.log(imgSrc);
  });
}

$(handleThumbnailClicks);