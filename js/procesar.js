document.getElementById('proyecto-1').addEventListener('click', proyecto1);
document.getElementById('proyecto-2').addEventListener('click', proyecto2);
document.getElementById('proyecto-3').addEventListener('click', proyecto3);
document.getElementById('proyecto-4').addEventListener('click', proyecto4);

function proyecto1() {
  var valor = "casitalatina";
  window.location.href = "project.html?valor=" + valor;
}
function proyecto2() {
  var valor = "botdiscord";
  window.location.href = "project.html?valor=" + valor;
}
function proyecto3() {
  var valor = "3";
  window.location.href = "project.html?valor=" + valor;
}
function proyecto4() {
  var valor = "4";
  window.location.href = "project.html?valor=" + valor;
}