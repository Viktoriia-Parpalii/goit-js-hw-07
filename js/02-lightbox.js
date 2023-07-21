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
    let galleryBox = new SimpleLightbox(".gallery a");
    galleryBox.on("show.simplelightbox", imagesMarkup);
  }
};

// let galleryBox = new SimpleLightbox(".gallery a");
// galleryBox.on(
//   "show.simplelightbox",
//   (gallery.onclick = (e) => {
// if (e.target) {
//   imagesMarkup;
// }
//   })
// );

// galleryBox.on("error.simplelightbox", function (e) {
//   console.log(e); // Some usefull information
// });

// gallery.onclick = (e) => {
//   if (e.target) {
//     var lightbox = new SimpleLightbox(".gallery a");
//   }
// };

// console.log(galleryItems);
