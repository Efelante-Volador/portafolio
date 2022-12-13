var $nav = document.getElementById('navegador');
var sobremi = document.getElementById('nav-tittle-perfil');
var porta = document.getElementById('nav-tittle-portafolio');

window.addEventListener('scroll', function() {
  let ubicacionactual = window.pageYOffset || document.documentElement.scrollTop
  //console.log(ubicacionactual);
  if (ubicacionactual >= 630) {
    $nav.style.visibility = "visible";
  }
  else {
    $nav.style.visibility = "hidden";
  }
})
function inicio() {
  window.scrollTo("smooth", 0);
  sobremi.style.color = "rgba(255, 255, 255, 0.55)"
  porta.style.color = "rgba(255, 255, 255, 0.55)"
}
function miTrabajo() {
  window.scrollTo("smooth", 630);
  sobremi.style.color = "rgb(38, 222, 170)";
  porta.style.color = "rgba(255, 255, 255, 0.55)"
}
function portafolio() {
  window.scrollTo("smooth", 1396);
  porta.style.color = "rgb(38, 222, 170)";
  sobremi.style.color = "rgba(255, 255, 255, 0.55)"
}