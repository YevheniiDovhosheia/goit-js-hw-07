import { galleryItems } from "./gallery-items.js";
console.log(basicLightbox);
// Change code below this line

const collection = document.querySelector(".gallery");
const createMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join("");
collection.insertAdjacentHTML("afterbegin", createMarkup);
collection.addEventListener('click',handlerClick)
function handlerClick(event) {
  if (event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" heihth="900" 
   src="${event.target.dataset.sourse}">`,
    {
      onShowe: () => {
        window.addEventListener("keydown", onEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEsc);
      },
    }
  );
  function onEsc(event) {
    if (event.key == "Escape") {
      instance.close();
    }
  }
};
