import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", imagesMarkup);
gallery.addEventListener("click", (e) => e.preventDefault());

function createImagesMarkup(images) {
  return images
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href=${original}"">
    <img
      class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt= "${description}"
    />
  </a>
</li> `;
    })
    .join("");
}

gallery.onclick = (e) => {
  if (e.target) {
    basicLightbox
      .create(
        `
		<img width="1280"  src="${e.target.dataset.source}">
	`
      )
      .show();
  }
};
// console.log(galleryItems);
