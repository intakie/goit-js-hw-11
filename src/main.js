import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  loader.style.display = 'block';

  const query = searchForm.elements.search.value.trim();
  if (!query) {
    iziToast.error({
      message: 'Please enter a search query',
    });
    return;
  }

  searchImages(query)
    .then(renderImages)
    .catch(error => {
      console.error('Error handling search:', error);
      iziToast.error({
        message: 'Failed to search for images. Please try again later.',
      });
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
