import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderImages(images) {
  gallery.innerHTML = '';

  if (images.hits.length === 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
  }

  gallery.innerHTML = images.hits
    .map(
      image => `
    <li class="gallery-item">
        <a href="${image.largeImageURL}" data-lightbox="gallery">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
        </a>
        <div class="image-details">
            <p>Likes: ${image.likes}</p>
            <p>Views: ${image.views}</p>
            <p>Comments: ${image.comments}</p>
            <p>Downloads: ${image.downloads}</p>
        </div>
    </li>
`
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}
