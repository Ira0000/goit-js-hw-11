import fetchImages from './js/pixabay-api.js';
import renderPhotoes from './js/render-functions.js';

const searchBtn = document.querySelector('.search-btn');
const searchField = document.querySelector('.search-input');
const imgList = document.querySelector('.img-list');
const photoesContainer = document.querySelector('.img-section');

const fetchImagesBtn = searchBtn.addEventListener('click', () => {
  let searchValue = searchField.value;

  fetchImages(searchValue, photoesContainer)
    .then(photos => {
      renderPhotoes(photos, searchField, imgList);
    })
    .catch(error => {
      console.log('This error');
      console.log(error);
    });
});
