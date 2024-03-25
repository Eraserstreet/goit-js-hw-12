import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

// помилка
function showErrorToast() {
  iziToast.error({
    maxWidth: '432px',
    height: '48px',
    color: 'red',
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

// зображення
function displayImages(data) {
  const markup = imageTemplate(data.hits);
  imgGallery.innerHTML = markup;
  const galleryCfg = { captionsData: 'alt' };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}

// DOM
export const imgGallery = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');

// Слухач подій для форми
formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.image.value.trim();
  imgGallery.innerHTML = '<div class="loader"></div>';

  // Зображення і обробка
  getImage(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        showErrorToast();
      } else {
        displayImages(data);
      }
    })
    .catch(error => {
      showErrorToast();
    })
    .finally(() => {
      formEl.reset();
    });
});
