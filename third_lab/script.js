const item_gallery = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImage = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
const lightBoxClose = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");
lightBoxClose.classList.add("fa", "fa-times", "lightbox-close");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImage);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
lightBoxContent.appendChild(lightBoxClose);

document.body.appendChild(lightBoxContainer);

let index = 0;
const images = [
  { src: "../images/download.jpeg", caption: "Image 1" },
  { src: "../images/image_2.jpeg", caption: "Image 2" },
  { src: "../images/image_3.jpeg", caption: "Image 3" },
  { src: "../images/image_4.jpeg", caption: "Image 4" },
  { src: "../images/image_5.jpeg", caption: "Image 5" },
  { src: "../images/image_6.jpeg", caption: "Image 6" },
  { src: "../images/image_7.jpeg", caption: "Image 7" },
  { src: "../images/image_8.jpeg", caption: "Image 8" },
  { src: "../images/image_9.jpeg", caption: "Image 9" },
];
const lightBoxCaption = document.createElement("div");
lightBoxCaption.classList.add("lightbox-caption");

lightBoxContent.appendChild(lightBoxCaption);

function showLightbox(n) {
  if (n >= images.length) {
    index = 0;
  } else if (n < 0) {
    index = images.length - 1;
  } else {
    index = n;
  }

  lightBoxImage.setAttribute("src", images[index].src);
  lightBoxImage.setAttribute("alt", images[index].caption);
  lightBoxCaption.textContent = images[index].caption;
  lightBoxContent.setAttribute("aria-label", images[index].caption);
}

function currentImage(event) {
  index = Array.from(item_gallery).indexOf(
    event.target.closest(".gallery-item")
  );
  showLightbox(index);
  lightBoxContainer.style.display = "block";
}

function sliderImage(n) {
  showLightbox(index + n);
}

function prevImage() {
  sliderImage(-1);
}

function nextImage() {
  sliderImage(1);
}

function closeLightBox(event) {
  if (event.target === lightBoxContainer || event.target === lightBoxClose) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);
lightBoxClose.addEventListener("click", closeLightBox);

for (let i = 0; i < item_gallery.length; i++) {
  item_gallery[i].addEventListener("click", currentImage);
}

// This automatically close lightbox if the user clicks outside the content
lightBoxContainer.addEventListener("click", closeLightBox);
