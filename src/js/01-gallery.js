// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './helpers/createMarkup';
import { onOpenModal } from './helpers/openModal';

// Change code below this line

const listEl = document.querySelector('.gallery');
createMarkup(galleryItems, listEl);

listEl.addEventListener('click', onOpenModal);
onOpenModal(evt);
