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
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt= "${description}"
      loading="lazy"
    />
  </a>
</li> `;
    })
    .join("");
}

gallery.onclick = (e) => {
  if (e.target) {
    const instance = basicLightbox
      .create(
        `
		<img width="1280"  src="${e.target.dataset.source}">
	`
      )
      .show();
  }
};
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    basicLightbox.close();
  }
});
// console.log(galleryItems);
