const item_gallery = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImage = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
//const lightBoxClose = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");
//lightBoxClose.classList.add("fa", "fa-times", "lightbox-close");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImage);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
//lightBoxContent.appendChild(lightBoxClose);

document.body.appendChild(lightBoxContainer);

let index = 0;
const images = [
  { src: "./images/football-trainer-teaching-his-pupils_23-2149707974.avif", caption: "Image 1" },
  { src: "./images/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-fa.avif", caption: "Image 2" },
  { src: "./images/full-length-woman-exercising-field_1048944-30351094.avif", caption: "Image 3" },
  { src: "./images/mom-spending-time-with-kid-beach_23-2150924978.avif", caption: "Image 4" },
  { src: "./images/mom-spending-time-with-kid-beach_23-2150924982.avif", caption: "Image 5" },
  { src: "./images/mom-spending-time-with-kid-beach_23-2150924983.avif", caption: "Image 6" },
  { src: "./images/portrait-shirtless-man-standing-beach_1048944-30315343.avif", caption: "Image 7" },
  { src: "./images/water-polo-player-pool-with-swimming-equipment_23-2150893950.avif", caption: "Image 8" },
  { src: "./images/medium-shot-women-with-delicious-food_23-2150168102.avif", caption: "Image 9" },
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
  if (event.target === lightBoxContainer) {
    lightBoxContainer.style.display = "none";
  }
}

lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);
// /lightBoxClose.addEventListener("click", closeLightBox);

for (let i = 0; i < item_gallery.length; i++) {
  item_gallery[i].addEventListener("click", currentImage);
}

lightBoxContainer.addEventListener("click", closeLightBox);
