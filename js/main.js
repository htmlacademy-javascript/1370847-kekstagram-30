const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const PHOTOS_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const generatePhotosArray = (count) => {
  const photosArray = [];
  for (let i = 0; i < count; i++) {
    const photo = {
      id: i + 1,
      name: 'gvgvg',
    };
    photosArray.push(photo);
  };
  return photosArray;
};

console.log(generatePhotosArray(3));
