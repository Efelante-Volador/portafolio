document.getElementById('jsonBtnEs').addEventListener('click', idiomaEs);
document.getElementById('jsonBtnEn').addEventListener('click', idiomaEn);
document.getElementById('volver').addEventListener('click', redirect);
document.getElementById('next').addEventListener('click', avanzar);
document.getElementById('prev').addEventListener('click', retroceder);

// Variables HTML de 
const titleDetail = document.getElementById('title-detail');
const titleTec = document.getElementById('title-tec');
const titleLink = document.getElementById('title-link');
const title = document.getElementById('title');
const detail = document.getElementById('p-detail');
const detail2 = document.getElementById('p-detail2');
const detail3 = document.getElementById('p-detail3');
const detail4 = document.getElementById('p-detail4');
const detail5 = document.getElementById('p-detail5');
const detail6 = document.getElementById('p-detail6');
const detail7 = document.getElementById('p-detail7');
const link = document.getElementById('link');
const link2 = document.getElementById('link2');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

// avanzar y volver en los proyectos.
const previusProject = document.getElementById('previus-project');
const nextProject = document.getElementById('next-project');

//footer para cambio de idioma
var footerContactTitle = document.getElementById('titulo-contacto-footer');
var footerFono = document.getElementById('footer-fono');
var footerEmail = document.getElementById('footer-email');
var footerSocialTitle = document.getElementById('id-social-title');
var footerGit = document.getElementById('footer-git');
var footerLk = document.getElementById('footer-lk');
var footerIg = document.getElementById('footer-ig');
var copyright = document.getElementById('footer-copyright');


function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}
function getUrlParameter(name) {
  return getUrlVars()[name];
}
window.onload = function() {
  var idioma = localStorage.getItem("idioma");
  if(idioma=="en"){
    idiomaEn();
  }
  var pageColors = getUrlParameter("pageColors");
  const toggleIcon = document.getElementById("toggle-icon");
  const toggleText = document.getElementById("texto-toggle");
  if (pageColors == "1") {//dark
    document.body.classList.add("dark");
    toggleIcon.src = '../img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
  }
}
function idiomaEs() {
  fetch('../json/project.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      //establecemos un local storage para mantener el estado español
      localStorage.setItem("idioma", "es");
      //titulos generales
      titleDetail.textContent = json.es.general.titleDetail;
      titleTec.textContent = json.es.general.titleTec;
      titleLink.textContent = json.es.general.titleLink;
      //footer
      footerContactTitle.textContent = json.es.footer.contact.title;
      footerFono.textContent = json.es.footer.contact.phone;
      footerEmail.textContent = json.es.footer.contact.email;
      footerSocialTitle.textContent = json.es.footer.social.title;
      footerGit.textContent = json.es.footer.social.git;
      footerLk.textContent = json.es.footer.social.lk;
      footerIg.textContent = json.es.footer.social.ig;
      copyright.textContent = "Todos los derechos reservados.";
    });
}
function idiomaEn() {
  fetch('../json/project.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      //establecemos un local storage para mantener el estado español
      localStorage.setItem("idioma", "en");
      //titulos generales
      titleDetail.textContent = json.en.general.titleDetail;
      titleTec.textContent = json.en.general.titleTec;
      titleLink.textContent = json.en.general.titleLink;
      //footer
      footerContactTitle.textContent = json.en.footer.contact.title;
      footerFono.textContent = json.en.footer.contact.phone;
      footerEmail.textContent = json.en.footer.contact.email;
      footerSocialTitle.textContent = json.en.footer.social.title;
      footerGit.textContent = json.en.footer.social.git;
      footerLk.textContent = json.en.footer.social.lk;
      footerIg.textContent = json.en.footer.social.ig;
      copyright.textContent = "All rights reserved.";
    });
}
function redirect() {
  var pageColors = getUrlParameter("pageColors");
  if (pageColors == "1") {//dark
    window.location.href = "../index.html?pageColors=" + pageColors;
  }
  else if (pageColors == "2") {//light
    window.location.href = "../index.html?pageColors=" + pageColors;
  }
  else {//light por defecto
    window.location.href = "../index.html?pageColors=" + pageColors;
  }
}
function avanzar() {
  var titleValue = title.innerHTML;
  var pageColors = getUrlParameter("pageColors");
  switch (titleValue) {
    case "Bot de discord":
      window.location.href = "../project/casitaLatina.html?pageColors=" + pageColors;
      break;
    case "Casita Latina":
      window.location.href = "../project/botDiscord.html?pageColors=" + pageColors;
      break;
    default:
      // Ejecuta algún código en caso de que ninguno de los casos anteriores se cumpla
      break;
  }
}
function retroceder() {
  var titleValue = title.innerHTML;
  var pageColors = getUrlParameter("pageColors");
  switch (titleValue) {
    case "Bot de discord":
      window.location.href = "../project/casitaLatina.html?pageColors=" + pageColors;
      break;
    default:
      // Ejecuta algún código en caso de que ninguno de los casos anteriores se cumpla
      break;
  }
}
