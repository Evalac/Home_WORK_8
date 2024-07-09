// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import { createMarkup } from './helpers/createMarkup';
// Change code below this line

const listEl = document.querySelector('.gallery');
console.log('listEl: ', listEl);

createMarkup(galleryItems, listEl);
