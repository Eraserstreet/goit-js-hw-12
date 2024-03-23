import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

export const imgGallery = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.image.value.trim();
  imgGallery.innerHTML = '<div class="loader"></div>';
  getImage(inputValue)
    .then(data => {
      const markup = imageTemplate(data.hits);
      imgGallery.innerHTML = markup;
      const galleryCfg = {
        captionsData: 'alt',
      };
      let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
      lightbox.on('show.simplelightbox', function () {});
      lightbox.refresh();
      if (data.hits.length === 0) {
        return error;
      }
    })
    .catch(error => {
      iziToast.error({
        maxWidth: '432px',
        height: '48px',
        color: 'red',
        position: 'topRight',
        message: 'Error occurred while loading images. Please try again later.',
      });
    })
    .finally(() => {
      return formEl.reset();
    });
});
