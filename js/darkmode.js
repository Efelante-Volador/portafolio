const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = 'img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.src = 'img/icons/moon.png'
    toggleText.textContent = 'Dark Mode';
  }
})

toggleColors.addEventListener("click", (e) => {
  console.log(e);
})