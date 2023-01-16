document.getElementById('jsonBtnEs').addEventListener('click', es);
document.getElementById('jsonBtnEn').addEventListener('click', en);

// Obtiene un elemento del documento HTML Párrafo
var titulo1 = document.getElementById('t1');
var titulo2 = document.getElementById('t2');
var navTittle1 = document.getElementById('nav-tittle-inicio');
var navTittle2 = document.getElementById('nav-tittle-perfil');
var navTittle3 = document.getElementById('nav-tittle-portafolio');
var navTittle4 = document.getElementById('nav-tittle-contacto');
var navTittle5 = document.getElementById('nav-tittle-idioma');
var caption1 = document.getElementById('caption1');
var caption2 = document.getElementById('caption2');
var caption3 = document.getElementById('caption3');
var caption4 = document.getElementById('caption4');
var tituloPerfil = document.getElementById('perfil-titulo');
var txt1 = document.getElementById('cap1');
var txt2 = document.getElementById('cap2');
var txt3 = document.getElementById('cap3');
var txt4 = document.getElementById('cap4');
var who = document.getElementById('question');
var text = document.getElementById('question-text');
var skills = document.getElementById('skills');
var botonInicial = document.getElementById('btn-inicial');
var sectionProyecto = document.getElementById('title-proyect');
var toggleEs = document.getElementById('spanEs');
var toggleEn = document.getElementById('spanEn');
var tituloProyecto1A = document.getElementById('proyect-title-1A');
var tituloProyecto2A = document.getElementById('proyect-title-2A');
var tituloProyecto3A = document.getElementById('proyect-title-3A');
var tituloProyecto4A = document.getElementById('proyect-title-4A');
var descargarCV = document.getElementById('dowload-cv');
//var masinfo = document.getElementById('');

var tituloCertificados = document.getElementById('titulo-certificados');
var certificadoT1 = document.getElementById('certificado-t1');
var descargaCertificado = document.getElementById('dowload-certificado');
var footerContactTitle = document.getElementById('titulo-contacto-footer');
var footerFono = document.getElementById('footer-fono');
var footerEmail = document.getElementById('footer-email');
var footerSocialTitle = document.getElementById('id-social-title');
var footerGit = document.getElementById('footer-git');
var footerLk = document.getElementById('footer-lk');
var footerIg = document.getElementById('footer-ig');
var copyright = document.getElementById('footer-copyright');

window.onload = function() {
  var idioma = localStorage.getItem("idioma");
  if (idioma == "en") {
    en();
  }
  else {
    es();
  }
  const toggleIcon = document.getElementById("toggle-icon");
  const toggleText = document.getElementById("texto-toggle");
  var toggle = localStorage.getItem("toggle");
  if (toggle == "dark") {
    toggleIcon.src = './img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
    localStorage.setItem("toggle", "dark");
    document.body.classList.add("dark");
  }
  else {
    toggleIcon.src = './img/icons/moon.png'
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem("toggle", "light");
    document.body.classList.remove("dark");
  }
}
function es() {
  //console.log("Spanish");
  fetch('json/infopag.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      //establecemos un local storage para mantener el estado español
      localStorage.setItem("idioma", "es");
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.es.titles.t1;
      titulo2.textContent = json.es.titles.t2;
      navTittle1.textContent = json.es.navbar.home;
      navTittle2.textContent = json.es.navbar.profile;
      navTittle3.textContent = json.es.navbar.portfolio;
      navTittle4.textContent = json.es.navbar.contact;
      navTittle5.textContent = json.es.navbar.language.title;
      caption1.textContent = json.es.profile.caption.c1;
      caption2.textContent = json.es.profile.caption.c2;
      caption3.textContent = json.es.profile.caption.c3;
      caption4.textContent = json.es.profile.caption.c4;
      tituloPerfil.textContent = json.es.profile.title;
      txt1.textContent = json.es.profile.text.txt1;
      txt2.textContent = json.es.profile.text.txt2;
      txt3.textContent = json.es.profile.text.txt3;
      txt4.textContent = json.es.profile.text.txt4;
      who.textContent = json.es.profile.who.question;
      text.textContent = json.es.profile.who.text;
      descargarCV.textContent = json.es.profile.who.dowload;
      skills.textContent = json.es.profile.skills;
      botonInicial.textContent = "Mi trabajo";
      toggleEn.textContent = json.es.navbar.language.en;
      toggleEs.textContent = json.es.navbar.language.es;
      sectionProyecto.textContent = "Proyectos"
      tituloProyecto1A.textContent = json.es.projects.titles.t1;
      tituloProyecto2A.textContent = json.es.projects.titles.t2;
      tituloProyecto3A.textContent = json.es.projects.titles.t3;
      tituloProyecto4A.textContent = json.es.projects.titles.t4;
      tituloCertificados.textContent = json.es.certification.title;
      certificadoT1.textContent = json.es.certification.titles.t1;
      descargaCertificado.textContent = json.es.certification.dowloadCertification;
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
function en() {
  //console.log("english");
  fetch('json/infopag.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      //establecemos un local storage para mantener el estado ingles
      localStorage.setItem("idioma", "en");
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.en.titles.t1;
      titulo2.textContent = json.en.titles.t2;
      navTittle1.textContent = json.en.navbar.home;
      navTittle2.textContent = json.en.navbar.profile;
      navTittle3.textContent = json.en.navbar.portfolio;
      navTittle4.textContent = json.en.navbar.contact;
      navTittle5.textContent = json.es.navbar.language.title;
      caption1.textContent = json.en.profile.caption.c1;
      caption2.textContent = json.en.profile.caption.c2;
      caption3.textContent = json.en.profile.caption.c3;
      caption4.textContent = json.en.profile.caption.c4;
      tituloPerfil.textContent = json.en.profile.title;
      txt1.textContent = json.en.profile.text.txt1;
      txt2.textContent = json.en.profile.text.txt2;
      txt3.textContent = json.en.profile.text.txt3;
      txt4.textContent = json.en.profile.text.txt4;
      who.textContent = json.en.profile.who.question;
      text.textContent = json.en.profile.who.text;
      descargarCV.textContent = json.en.profile.who.dowload;
      skills.textContent = json.en.profile.skills;
      botonInicial.textContent = "My work";
      toggleEn.textContent = json.en.navbar.language.en;
      toggleEs.textContent = json.en.navbar.language.es;
      sectionProyecto.textContent = "Projects"
      tituloProyecto1A.textContent = json.en.projects.titles.t1;
      tituloProyecto2A.textContent = json.en.projects.titles.t2;
      tituloProyecto3A.textContent = json.en.projects.titles.t3;
      tituloProyecto4A.textContent = json.en.projects.titles.t4;
      tituloCertificados.textContent = json.en.certification.title;
      certificadoT1.textContent = json.en.certification.titles.t1;
      descargaCertificado.textContent = json.en.certification.dowloadCertification;
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
