function createMarkup(galleryItems, listEl) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join('');

  listEl.insertAdjacentHTML('beforeend', markup);
}

export { createMarkup };
