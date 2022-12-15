// Este código crea un controlador de eventos que escucha clicks en el elemento con ID "toggle-theme" El cual englobara el boton que activa esto
// luego obtiene el elemento con ID "toggle-icon" (icono) y el elemento con ID "texto-toggle" (texto)
// para poder modificarlo más adelante cuando se haga el swich de modo oscuro y claro.
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("texto-toggle");


toggleTheme.addEventListener("click", () => {

  // Este código cambia la clase "dark" en el elemento html "body",
  // lo que cambia los estilos de la página mediante el css para reflejar el tema oscuro.
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = 'img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
  } else {
    toggleIcon.src = 'img/icons/moon.png'
    toggleText.textContent = 'Dark Mode';
  }
})
