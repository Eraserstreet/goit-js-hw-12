import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

const formEl = document.querySelector('.form');
const imgGallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let searchQuery = '';
let currentPage = 1;
let lightboxInstance = null;

const showLoader = () => {
  loader.style.display = 'block';
};

const hideLoader = () => {
  loader.style.display = 'none';
};

const showErrorToast = () => {
  iziToast.error({
    maxWidth: '432px',
    height: '48px',
    color: 'red',
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
};

const displayImages = data => {
  const markup = imageTemplate(data.hits);
  imgGallery.innerHTML += markup;

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a', {});
  } else {
    lightboxInstance.refresh();
  }
};

const handleFormSubmit = async event => {
  event.preventDefault();
  imgGallery.innerHTML = '';
  currentPage = 1;

  searchQuery = event.currentTarget.elements.image.value.trim();

  if (!searchQuery) {
    iziToast.error({
      color: 'yellow',
      message: 'Please fill in the field for search query.',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  try {
    const data = await getImage(searchQuery, currentPage);
    if (data.hits.length === 0) {
      showErrorToast();
      loadMoreBtn.style.display = 'none';
      return;
    }

    displayImages(data);

    if (data.totalHits > 15) {
      loadMoreBtn.style.display = 'block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  } catch (error) {
    showErrorToast();
    loadMoreBtn.style.display = 'none';
  } finally {
    hideLoader();
    formEl.reset();
  }
};

const handleLoadMore = async () => {
  currentPage += 1;

  showLoader();

  try {
    const data = await getImage(searchQuery, currentPage);
    if (data.hits.length === 0) {
      iziToast.info({
        color: 'yellow',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    displayImages(data);

    if (data.totalHits <= currentPage * 15) {
      loadMoreBtn.style.display = 'none';
    }

    smoothScroll();
  } catch (error) {
    showErrorToast();
  } finally {
    hideLoader();
  }
};

formEl.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);

function smoothScroll() {
  const galleryItem = document.querySelector('.gallery-item');
  const cardHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
