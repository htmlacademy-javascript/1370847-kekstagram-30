const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({ url, description, likes, comments }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

export const renderThumbnails = (photos) => {
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    container.append(thumbnail);
  });
};


