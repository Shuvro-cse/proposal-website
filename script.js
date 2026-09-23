const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");

function moveNoButton() {
  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - buttonWidth - 20;
  const maxY = window.innerHeight - buttonHeight - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", function(event) {
  event.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", function() {
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
});
