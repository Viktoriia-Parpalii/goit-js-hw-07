import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt= "${description}"
      loading="lazy"
    />
  </a>
</li> `;
    })
    .join("");
}

let galleryBox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
