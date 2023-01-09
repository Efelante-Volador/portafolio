document.getElementById('proyecto-1').addEventListener('click', proyecto1);
document.getElementById('proyecto-2').addEventListener('click', proyecto2);
document.getElementById('proyecto-3').addEventListener('click', proyecto3);
document.getElementById('proyecto-4').addEventListener('click', proyecto4);

function proyecto1() {
  var valor;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    valor = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    valor = 2;
  }
  window.location.href = "project/casitaLatina.html?valor=" + valor;
}
function proyecto2() {
  var valor;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    valor = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    valor = 2;
  }
  window.location.href = "project/botDiscord.html?valor=" + valor;
}
function proyecto3() {
  var valor;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    valor = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    valor = 2;
  }
  window.location.href = "project/casitaLatina.html?valor=" + valor;
}
function proyecto4() {
  var valor;
  if (document.body.classList.contains("dark")) {
    // El elemento body tiene la clase "dark"
    valor = 1;
  } else {
    // El elemento body no tiene la clase "dark"
    valor = 2;
  }
  window.location.href = "project/casitaLatina.html?valor=" + valor;
}