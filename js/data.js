import { getRandomArrayElement, getRandomInteger } from './util';
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

const COMMENT_SENTENCES = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';

const MAX_COMMENT_COUNT = 30;
const MAX_AVATAR_ID = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomSentences = (count) => {
  const sentencesArray = COMMENT_SENTENCES.split('. ');
  const resultArray = [];
  for (let i = 0; i < count; i++) {
    resultArray.push(getRandomArrayElement(sentencesArray));
  }
  return resultArray.join('. ');
};

const getCommentsArray = (count) => {
  const commentsArray = [];
  for (let i = 0; i < count; i++) {
    const comment = {
      id: i + 1,
      avatar: `img/avatar-${getRandomInteger(1, MAX_AVATAR_ID)}.svg`,
      message: getRandomSentences(getRandomInteger(1, 2)),
      name: getRandomArrayElement(NAMES),
    };
    commentsArray.push(comment);
  }
  return commentsArray;
};

export const generatePhotosArray = (count) => {
  const photosArray = [];
  for (let i = 0; i < count; i++) {
    const photo = {
      id: i + 1,
      url: `photos/${(i + 1)}.jpg`,
      description: 'Это мое любимое фото',
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: getCommentsArray(getRandomInteger(0, MAX_COMMENT_COUNT)),
    };
    photosArray.push(photo);
  }
  return photosArray;
};

