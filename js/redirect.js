document.getElementById('proyecto-1').addEventListener('click', proyecto1);
document.getElementById('proyecto-2').addEventListener('click', proyecto2);
document.getElementById('proyecto-3').addEventListener('click', proyecto3);
document.getElementById('proyecto-4').addEventListener('click', proyecto4);

function proyecto1() {
  var pageColors;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    pageColors = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    pageColors = 2;
  }
  window.location.href = "project/casitaLatina.html?pageColors=" + pageColors;
}
function proyecto2() {
  var pageColors;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    pageColors = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    pageColors = 2;
  }
  window.location.href = "project/botDiscord.html?pageColors=" + pageColors;
}
function proyecto3() {
  var pageColors;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    pageColors = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    pageColors = 2;
  }
  window.location.href = "project/casitaLatina.html?pageColors=" + pageColors;
}
function proyecto4() {
  var pageColors;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    pageColors = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    pageColors = 2;
  }
  window.location.href = "project/casitaLatina.html?pageColors=" + pageColors;
}