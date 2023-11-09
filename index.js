const counter = document.querySelector(".counter");

const loadingbarfront = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counter.innerText = idx + "%";
  loadingbarfront.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}