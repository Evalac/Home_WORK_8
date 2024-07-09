// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './helpers/createMarkup';

// Change code below this line

const listEl = document.querySelector('.gallery');
createMarkup(galleryItems, listEl);
listEl.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  evt.preventDefault();
  const isIMG = evt.target.nodeName;
  if (isIMG !== 'IMG') {
    return;
  }
  const gallery = new SimpleLightbox('.gallery a', {});
}
