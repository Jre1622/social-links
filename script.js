let locationElement = document.querySelector(".card-header a");

colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown"];

let scaleUp = true;

function changeColorsAndSize() {
  locationElement.style.color = colors[Math.floor(Math.random() * colors.length)];

  if (scaleUp) {
    locationElement.style.transform = "scale(1.2)";
    scaleUp = false;
  } else {
    locationElement.style.transform = "scale(1)";
    scaleUp = true;
  }
}

setInterval(changeColorsAndSize, 500); // change color and size every 500 milliseconds
