export const loadPhotos = async (page, searchValue) => {
  const apiToken = '563492ad6f91700001000001b6d497b1222b4550bf96a3a556435bc5';
  const urlPixel = 'https://api.pexels.com/v1/search?query=' + searchValue + '&page=' + page;
  const options = {
    headers: {
      Authorization: apiToken
    }
  };

  const imagesList = await fetch(urlPixel, options).then(res => res.json());

  return imagesList;
}