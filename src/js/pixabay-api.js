function fetchImages(searchValue, photoesContainer) {
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

export default fetchImages;
