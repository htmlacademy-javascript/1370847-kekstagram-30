import { generatePhotosArray } from './data.js';
import { renderThumbnails } from './thumbnail.js';

const PHOTOS_COUNT = 25;

renderThumbnails(generatePhotosArray(PHOTOS_COUNT));
