// Este código es un menú de navegación en un sitio web que se despliega cuando el usuario se desplaza hacia abajo y desaparece cuando el usuario se encuentra en la primera seccion del sitio. También incluye funciones que permiten al usuario desplazarse hacia diferentes secciones del sitio web haciendo clic en los elementos del menú.

var $nav = document.getElementById('navegador');
var sobremi = document.getElementById('nav-tittle-perfil');
var porta = document.getElementById('nav-tittle-portafolio');
var portada = document.getElementById('inicio');

window.addEventListener('scroll', function() {
  //Este codigo obtiene la ubicacion del Scroll
  let ubicacionactual = window.pageYOffset || document.documentElement.scrollTop
  console.log(ubicacionactual);

  //Este codigo hace aparecer o desaparecer el NavBar dependiendo de donde se encuentre el Scroll
  if (ubicacionactual >= 630) {
    $nav.style.visibility = "visible";
  }
  else {
    $nav.style.visibility = "hidden";
  }
})
//Esta funcion desplaza el navegador a la seccion de inicio
function inicio() {
  window.scrollTo("smooth", 0);
  sobremi.style.color = "rgba(255, 255, 255, 0.55)"
  porta.style.color = "rgba(255, 255, 255, 0.55)"
}
//Esta funcion desplaza el navegador a la seccion de Perfil
function miTrabajo() {
  window.scrollTo("smooth", 782);
  sobremi.style.color = "rgb(38, 222, 170)";
  porta.style.color = "rgba(255, 255, 255, 0.55)"
}
//Esta funcion desplaza el navegador a la seccion de Proyectos
function portafolio() {
  window.scrollTo("smooth", 1717);
  porta.style.color = "rgb(38, 222, 170)";
  sobremi.style.color = "rgba(255, 255, 255, 0.55)"
}