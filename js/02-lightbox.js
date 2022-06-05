import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function onCreateGalleryItem(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join("");
}

const galleryItem = onCreateGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250})

}

