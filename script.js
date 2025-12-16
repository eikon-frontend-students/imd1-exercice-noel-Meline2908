const santa = document.querySelector("#santa");
const sound = document.querySelector("#hohoho");

santa.addEventListener("click", () => {
  santa.classList.toggle("crazy");

  sound.currentTime = 0;
  sound.play();

  createSnow();
});

function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.innerHTML = "❄";

  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 5000);
}
