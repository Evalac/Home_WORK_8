function createMarkup(galleryItems, listEl) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                    <img
                        class=" "
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
            
                    />
                </a>
            </li>`
    )
    .join('');

  listEl.innerHTML = markup;
}

export { createMarkup };
