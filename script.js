// ===== Name gate =====
// The name it checks for. Not case-sensitive, and ignores extra spaces.
var EXPECTED_NAME = "francheska";

document.addEventListener('DOMContentLoaded', function () {
  var gate = document.getElementById('gate');
  var gateForm = document.getElementById('gateForm');
  var gateInput = document.getElementById('gateInput');
  var gateError = document.getElementById('gateError');
  var mainContent = document.getElementById('mainContent');

  gateForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var typed = gateInput.value.trim().toLowerCase();
    if (typed === EXPECTED_NAME) {
      gate.classList.add('hidden');
      mainContent.classList.add('revealed');
      setTimeout(function () { gate.style.display = 'none'; }, 400);
    } else {
      gateError.classList.add('show');
      gateInput.focus();
      gateInput.select();
    }
  });

  gateInput.addEventListener('input', function () {
    gateError.classList.remove('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {

  // Every .photo-tile gets a click handler that opens the lightbox using
  // that tile's own image and caption — nothing is uploaded or stored,
  // it just reads what's already on the page.
  document.querySelectorAll('.photo-tile').forEach(function (tile) {
    tile.addEventListener('click', function () {
      var img = tile.querySelector('img');
      var captionEl = tile.querySelector('.tile-caption');
      openLightbox(img.src, captionEl ? captionEl.textContent : '');
    });
  });

  var lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});

function openLightbox(src, caption) {
  document.getElementById('lightboxImg').src = src;
  document.getElementById('lightboxCaption').textContent = caption || '';
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightboxImg').src = '';
}
