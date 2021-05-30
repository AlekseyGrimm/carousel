const buttonPrevious = document.querySelector("#gallery .buttons .prev");
const buttonNext = document.querySelector("#gallery .buttons .next");
const images = document.querySelectorAll("#gallery .photos img");
let index = 0;

function previous() {
  images[index].className = "";
  index -= 1;
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].className = "showed";
}

function next() {
  images[index].className = "";
  index += 1;

  if (index >= images.length) {
    index = 0;
  }
  images[index].className = "showed";
}

buttonPrevious.addEventListener("click", previous);
buttonNext.addEventListener("click", next);

let finalPoint;
let initialPoint;
document.addEventListener(
  "touchstart",
  function (event) {
    initialPoint = event.changedTouches[0];
  },
  false
);

document.addEventListener(
  "touchend",
  function (event) {
    finalPoint = event.changedTouches[0];
    const x = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const y = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if ((x > 20 || y > 20) && x > y) {
      if (finalPoint.pageX < initialPoint.pageX) {
        previous();
      } else {
        next();
      }
    }
  },
  false
);
