document.getElementById('jsonBtnEs').addEventListener('click', idiomaEs);
document.getElementById('jsonBtnEn').addEventListener('click', idiomaEn);
document.getElementById('volver').addEventListener('click', redirect);
document.getElementById('next').addEventListener('click', avanzar);
document.getElementById('prev').addEventListener('click', retroceder);

// Variables HTML
const detail = document.getElementById('p-detail');
const detail2 = document.getElementById('p-detail2');
const detail3 = document.getElementById('p-detail3');
const detail4 = document.getElementById('p-detail4');
const detail5 = document.getElementById('p-detail5');
const detail6 = document.getElementById('p-detail6');
const tec1 = document.getElementById('tec-d1');
const tec2 = document.getElementById('tec-d2');
const tec3 = document.getElementById('tec-d3');
const tec4 = document.getElementById('tec-d4');
const tec5 = document.getElementById('tec-d5');
const textLink = document.getElementById('text-link');
const textLink2 = document.getElementById('text-link2');
const textLink3 = document.getElementById('text-link3');
//generales
const titleDetail = document.getElementById('title-detail');
const titleTec = document.getElementById('title-tec');
const titleLink = document.getElementById('title-link');
const title = document.getElementById('title');
const back = document.getElementById('volver');
const languaje = document.getElementById('nav-tittle-idioma');
const spanish = document.getElementById('spanEs');
const english = document.getElementById('spanEn');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const footerContactTitle = document.getElementById('titulo-contacto-footer');
const footerFono = document.getElementById('footer-fono');
const footerEmail = document.getElementById('footer-email');
const footerSocialTitle = document.getElementById('id-social-title');
const footerGit = document.getElementById('footer-git');
const footerLk = document.getElementById('footer-lk');
const footerIg = document.getElementById('footer-ig');
const copyright = document.getElementById('footer-copyright');
//
const previusProject = document.getElementById('previus-project');
const nextProject = document.getElementById('next-project');

window.onload = function() {
  var idioma = localStorage.getItem("idioma");
  if (idioma == "en") {
    idiomaEn();
  }
  else if (idioma == "es") {
    idiomaEs();
  }
  else {
    idiomaEs();
  }
  const toggleIcon = document.getElementById("toggle-icon");
  const toggleText = document.getElementById("texto-toggle");
  var toggle = localStorage.getItem("toggle");
  if (toggle == "dark") {
    toggleIcon.src = '../img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
    localStorage.setItem("toggle", "dark");
    document.body.classList.add("dark");
  }
  else {
    toggleIcon.src = '../img/icons/moon.png'
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem("toggle", "light");
    document.body.classList.remove("dark");
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
      //Traducciones Generales
      titleDetail.textContent = json.es.general.titleDetail;
      titleTec.textContent = json.es.general.titleTec;
      titleLink.textContent = json.es.general.titleLink;
      back.textContent = json.es.general.back;
      languaje.textContent = json.es.general.languaje;
      spanish.textContent = json.es.general.spanish;
      english.textContent = json.es.general.english;
      footerContactTitle.textContent = json.es.general.footer.contact.title;
      footerFono.textContent = json.es.general.footer.contact.phone;
      footerEmail.textContent = json.es.general.footer.contact.email;
      footerSocialTitle.textContent = json.es.general.footer.social.title;
      footerGit.textContent = json.es.general.footer.social.git;
      footerLk.textContent = json.es.general.footer.social.lk;
      footerIg.textContent = json.es.general.footer.social.ig;
      copyright.textContent = "Todos los derechos reservados.";
      switch (title.innerHTML) {
        case "Casita Latina":
          //title.textContent = json.es.project1.title;
          detail.textContent = json.es.project1.detail;
          detail2.textContent = json.es.project1.detail2;
          detail3.textContent = json.es.project1.detail3;
          detail4.textContent = json.es.project1.detail4;
          tec1.textContent = json.es.project1.tec1;
          tec2.textContent = json.es.project1.tec2;
          tec3.textContent = json.es.project1.tec3;
          textLink.textContent = json.es.project1.link;
          next.textContent = json.es.general.next;
          break;
        case "Bot Discord":
          detail.textContent = json.es.project2.detail;
          detail2.textContent = json.es.project2.detail2;
          detail3.textContent = json.es.project2.detail3;
          detail4.textContent = json.es.project2.detail4;
          detail5.textContent = json.es.project2.detail5;
          detail6.textContent = json.es.project2.detail6;
          tec1.textContent = json.es.project2.tec1;
          tec2.textContent = json.es.project2.tec2;
          tec3.textContent = json.es.project2.tec3;
          tec4.textContent = json.es.project2.tec4;
          tec5.textContent = json.es.project2.tec5;
          textLink.textContent = json.es.project2.link;
          textLink2.textContent = json.es.project2.link2;
          textLink3.textContent = json.es.project2.link3;
          next.textContent = json.es.general.next;
          prev.textContent = json.es.general.prev;
          break;
      }
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
      back.textContent = json.en.general.back;
      languaje.textContent = json.en.general.languaje;
      spanish.textContent = json.en.general.spanish;
      english.textContent = json.en.general.english;
      footerContactTitle.textContent = json.en.general.footer.contact.title;
      footerFono.textContent = json.en.general.footer.contact.phone;
      footerEmail.textContent = json.en.general.footer.contact.email;
      footerSocialTitle.textContent = json.en.general.footer.social.title;
      footerGit.textContent = json.en.general.footer.social.git;
      footerLk.textContent = json.en.general.footer.social.lk;
      footerIg.textContent = json.en.general.footer.social.ig;
      copyright.textContent = "All rights reserved.";

      switch (title.innerHTML) {
        case "Casita Latina":
          //title.textContent = json.en.project1.title;
          detail.textContent = json.en.project1.detail;
          detail2.textContent = json.en.project1.detail2;
          detail3.textContent = json.en.project1.detail3;
          detail4.textContent = json.en.project1.detail4;
          tec1.textContent = json.en.project1.tec1;
          tec2.textContent = json.en.project1.tec2;
          tec3.textContent = json.en.project1.tec3;
          textLink.textContent = json.en.project1.link;
          next.textContent = json.en.general.next;
          break;
        case "Bot Discord":
          detail.textContent = json.en.project2.detail;
          detail2.textContent = json.en.project2.detail2;
          detail3.textContent = json.en.project2.detail3;
          detail4.textContent = json.en.project2.detail4;
          detail5.textContent = json.en.project2.detail5;
          detail6.textContent = json.en.project2.detail6;
          tec1.textContent = json.en.project2.tec1;
          tec2.textContent = json.en.project2.tec2;
          tec3.textContent = json.en.project2.tec3;
          tec4.textContent = json.en.project2.tec4;
          tec5.textContent = json.en.project2.tec5;
          textLink.textContent = json.en.project2.link;
          textLink2.textContent = json.en.project2.link2;
          textLink3.textContent = json.en.project2.link3;
          next.textContent = json.en.general.next;
          prev.textContent = json.en.general.prev;
          break;
      }
    });
}
function redirect() {
  var toggle = localStorage.getItem("toggle");
  if (toggle == "dark") {
    localStorage.setItem("toggle", "dark");
  }
  else {
    localStorage.setItem("toggle", "light");
  }
  window.location.href = "../index.html";
}
function avanzar() {
  var titleValue = title.innerHTML;
  switch (titleValue) {
    case "Bot Discord":
      window.location.href = "../project/casitaLatina.html";
      break;
    case "Casita Latina":
      window.location.href = "../project/botDiscord.html";
      break;
    default:
      // Ejecuta algún código en caso de que ninguno de los casos anteriores se cumpla
      break;
  }
}
function retroceder() {
  var titleValue = title.innerHTML;
  switch (titleValue) {
    case "Bot Discord":
      window.location.href = "../project/casitaLatina.html";
      break;
    default:
      // Ejecuta algún código en caso de que ninguno de los casos anteriores se cumpla
      break;
  }
}
