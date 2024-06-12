const target = document.getElementById("target");
const yesButton = document.getElementById("yes");

function moveTarget() {
  const maxWidth = 400;
  const maxHeight = 500;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

target.addEventListener("mouseenter", function () {
  moveTarget();
});

document.addEventListener("DOMContentLoaded", function() {
  yesButton.addEventListener("click", () => {
    alert("Here's the ring 💍💓");
  });
});