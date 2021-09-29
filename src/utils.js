// Resize media
export const resizeImage = (imageUrl, size) => {
  let image;
  if (imageUrl) {
    image = imageUrl.match(/media\/screenshots/)
      ? imageUrl.replace('media/screenshots', `media/resize/${size}/-/screenshots`)
      : imageUrl.replace('/media/games', `/media/resize/${size}/-/games`);
  } else {
    image = imageUrl;
  }

  return image;
};
