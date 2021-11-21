// generate page header

(function (d) {
  'use strict';
  
  var header = d.createElement('header');
  header.innerHTML =
  '<img src="/assets/images/logo.png">' +
  '<p>under construction</p>';
  window.addEventListener('load', function () {
    d.body.insertAdjacentElement('afterbegin', header);
  });
})(document);
