'use strict';

function doHelloWorld() {
  // eslint-disable-next-line no-undef
  $('.js-hide-it').addClass('hidden');
  // eslint-disable-next-line no-undef
  $('.js-hello-world').text('hello world from JS');
}

doHelloWorld();