// gallery viewer

(function (d) {
  'use strict';

  var galleryDir = '/gallery/';
  var listing;
  var r = new XMLHttpRequest();

  var load = function () {
    listing = r.responseText.replace(/\r/gm, '').replace(/\n+$/, "").split('\n').map(function (cur) { return { name: cur.split('/').pop().split('.')[0], src: cur }; });

    var containers = Array.prototype.slice.call(d.getElementsByClassName('gallery'));
    containers.forEach(setupContainer);
  };

  var setupContainer = function (container) {
    listing.forEach(function (curImage) {
      var card = document.createElement('div');
      card.classList.add('panel');
      card.onclick = enlargeImage;
      card.innerHTML = `<div class="gallery-image" style="background-image: url('http://governators3361.netlify.app${galleryDir + curImage.src}');"></div><div class="gallery-image-name">${curImage.name}</div>`;
      container.appendChild(card);
    });
  };

  var enlargeImage = function () {
    var attribute = 'data-enlarge';
    if (this.hasAttribute(attribute)) {
      this.removeAttribute(attribute);
    } else {
      Array.prototype.slice.call(document.querySelectorAll(`[${attribute}]`)).forEach(function (cur) {
        cur.removeAttribute(attribute);
      });
      this.setAttribute(attribute, true);
    }
  };

  r.open('GET', '/gallery/listing.txt');
  r.onload = load;

  window.addEventListener('load', function () { r.send(); });
})(document);
