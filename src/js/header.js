// generate page header

(function (d) {
  'use strict';

  var currentPage = location.pathname.split('.html')[0];
  var header = d.createElement('header');
  header.innerHTML =
    '<a href="/" class="header-logo-container">' +
    '<img class="logo" src="/assets/images/logo.svg">' +
    '<span>The Governators</span>' +
    '</a>' +
    '<nav>' +
    '<a ' + (currentPage === '/' || currentPage === '/index' ? 'data-page-current' : '') + ' href="/">Home</a>' +
    '<a ' + (currentPage === '/blog' ? 'data-page-current' : '') + ' href="/blog">Blog</a>' +
    '<a ' + (currentPage === '/gallery' ? 'data-page-current' : '') + ' href="/gallery">Gallery</a>' +
    '</nav>';
  window.addEventListener('load', function () {
    d.body.insertAdjacentElement('afterbegin', header);
  });
})(document);
