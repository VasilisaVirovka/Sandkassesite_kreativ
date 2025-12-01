// Pop-over funktionalitet
const modal = document.getElementById("imageModal");
const svg = document.getElementById("mySVG");
const closeBtn = document.querySelector(".close");

svg.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

