function onOpenModal(evt) {
  evt.preventDefault();
  const isIMG = evt.target.nodeName;
  if (isIMG !== 'IMG') {
    return;
  }
  const gallery = new SimpleLightbox('.gallery a', {});
}

export { onOpenModal };
