"strict";

const bars = document.querySelectorAll(".bar");
console.log(bars);

window.addEventListener("load", start);

let array = Array.from({ length: 40 }, () => Math.floor(Math.random() * 32));
console.log(array, "newArray");

function start() {
  const queueSize = getNumberOfCustomers();
  function getNumberOfCustomers() {
    // FAKE: gives a completely random number
    return Math.floor(Math.random() * 32);
  }

  setTimeout(start, 1000);
  array.shift();

  array.push(queueSize);

  for (let i = 0; i < 40; i++) {
    bars[i].style.height = array[i] + "vw";
  }
}
