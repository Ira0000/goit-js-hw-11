import fetchImages from './js/pixabay-api.js';
import renderPhotoes from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('.search-input');
const imgList = document.querySelector('.img-list');
const photoesContainer = document.querySelector('.img-section');

function buttonDisabled() {
  searchBtn.classList.add('search-btn-disabled');
}

function buttonEnabled() {
  searchBtn.classList.remove('search-btn-disabled');
  searchBtn.disabled = false;
}

const fetchImagesBtn = searchBtn.addEventListener('click', () => {
  const downloadStatus = '<div class="loader"></div>';
  photoesContainer.insertAdjacentHTML('afterbegin', downloadStatus);

  let searchValue = searchField.value;
  const loader = document.querySelector('.loader');

  if (searchField.value !== '') {
    buttonEnabled();
    fetchImages(searchValue, photoesContainer)
      .then(photos => {
        if (photos.total === 0) {
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
          renderPhotoes(photos, imgList);
          loader.remove();
        }
      })
      .catch(error => {
        console.log('This error');
        console.log(error);
      });
  } else {
    buttonDisabled();
    loader.remove();
  }
});
