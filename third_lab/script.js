const item_gallery = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImage = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
//const lightBoxContainer = document.createElement("div")

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "a-angle-left", "lightbox-prev");
lightBoxImage.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImage);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
//lightBoxContent.appendChild(lightBoxImage);
//lightBoxContent.appendChild(lightBoxImage);
document.body.appendChild(lightBoxContainer);

let index = 1;
function showLight(n) {
  if (n > item_gallery.length) {
    index = 1;
  } else if (n < 1) {
    index = item_gallery.length;
  }

  let imageLocation = item_gallery[index - 1].children[0].getAttribute("src");
  lightBoxImage.setAttribute("src", imageLocation);

  function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLight((index = imageIndex));
  }
}
for (let i = 0; i < item_gallery.length; i++) {
  item_gallery[i].addEventListener("click", currentImage);
}
function sliderImage(n) {
  showLight((index += n));
}
function prevImage() {
  sliderImage(-1);
}
function nextImage() {
  sliderImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox(event) {
  if (this === event.target) {
    lightBoxContainer.style.display = "none";
  }
}
lightBoxContainer.addEventListener("click", closeLightBox);
