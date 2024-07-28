import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('.search-input');
const imgList = document.querySelector('.img-list');
const photoesContainer = document.querySelector('.img-section');

const fetchImagesBtn = searchBtn.addEventListener('click', () => {
  fetchImages()
    .then(photos => {
      renderPhotoes(photos);
      //   console.log('Success!', photos.hits);
    })
    .catch(error => {
      console.log('This error');
      console.log(error);
    });
});

function fetchImages() {
  let searchValue = searchField.value;
  //   console.log(searchValue);

  const searchParams = new URLSearchParams({
    key: '45153931-2470322a6efc3ba9ceddb2cb4',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    q: searchValue,
  });
  const downloadStatus = '<div class="loader"></div>';
  photoesContainer.insertAdjacentHTML('afterbegin', downloadStatus);
  let url = `https://pixabay.com/api/?${searchParams}`;
  //   console.log(url);

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderPhotoes(photos) {
  imgList.innerHTML = '';
  const loader = document.querySelector('.loader');

  if (photos.total === 0 || searchField.value === '') {
    imgList.innerHTML = '';
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#fff',
      iconColor: '#fff',
      icon: 'fa-regular fa-circle-xmark',
      progressBarColor: '#B51B1B',
      maxWidth: 432,
      messageSize: '16',
    });

    loader.remove();
  } else {
    const markup = photos.hits
      .map(photo => {
        return `<li class="gallery-item">
            <a class="gallery-link" href="${photo.largeImageURL}">
            <img
            class="gallery-img"
            src="${photo.webformatURL}"
            data-source="${photo.largeImageURL}"
            alt="${photo.tags}">
            </a>
            <div class="img-description">
              <p class="description-text">Likes <span class="description-value"> ${photo.likes}</span></p>
              <p class="description-text">Views <span class="description-value"> ${photo.views}</span></p>
              <p class="description-text">Comments <span class="description-value"> ${photo.comments}</span></p>
              <p class="description-text">Downloads <span class="description-value"> ${photo.downloads}</span></p>
            </div>
              </li>`;
      })
      .join('');
    // console.log(markup);
    imgList.insertAdjacentHTML('afterbegin', markup);

    loader.remove();

    let gallery = new SimpleLightbox('.img-list a', {
      captions: true,
      captionSelector: 'img',
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });
    gallery.on('show.simplelightbox', function () {});
  }
}
