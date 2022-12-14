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
var tituloProyecto1 = document.getElementById('proyect-title-1');
var tituloProyecto2 = document.getElementById('proyect-title-2');
var tituloProyecto3 = document.getElementById('proyect-title-3');
var tituloProyecto4 = document.getElementById('proyect-title-4');
var descriptionProyect1 = document.getElementById('proyect-description-1');
var descriptionProyect1B = document.getElementById('proyect-description-1B');
var descriptionProyect2 = document.getElementById('proyect-description-2');
var descriptionProyect3 = document.getElementById('proyect-description-3');
var descriptionProyect4 = document.getElementById('proyect-description-4');
var toggleEs=document.getElementById('spanEs');
var toggleEn=document.getElementById('spanEn');
var tituloProyecto1A = document.getElementById('proyect-title-1A');
var tituloProyecto2A = document.getElementById('proyect-title-2A');
var tituloProyecto3A = document.getElementById('proyect-title-3A');
var tituloProyecto4A = document.getElementById('proyect-title-4A');
var masinfo = document.getElementById('');

function es() {
  //console.log("Spanish");
  fetch('json/infopag.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.es.titles.t1;
      titulo2.textContent = json.es.titles.t2;
      navTittle1.textContent = json.es.navbar.inicio;
      navTittle2.textContent = json.es.navbar.perfil;
      navTittle3.textContent = json.es.navbar.portafolio;
      navTittle4.textContent = json.es.navbar.contacto;
      navTittle5.textContent = json.es.navbar.idioma.title;
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
      skills.textContent = json.es.profile.skills;
      botonInicial.textContent = "Mi Trabajo";
      toggleEn.textContent = json.es.navbar.idioma.en;
      toggleEs.textContent = json.es.navbar.idioma.es;
      sectionProyecto.textContent = "Proyectos"
      tituloProyecto1.textContent = json.es.proyects.titles.t1;
      tituloProyecto2.textContent = json.es.proyects.titles.t2;
      tituloProyecto3.textContent = json.es.proyects.titles.t3;
      tituloProyecto4.textContent = json.es.proyects.titles.t4;
      tituloProyecto1A.textContent = json.es.proyects.titles.t1;
      tituloProyecto2A.textContent = json.es.proyects.titles.t2;
      tituloProyecto3A.textContent = json.es.proyects.titles.t3;
      tituloProyecto4A.textContent = json.es.proyects.titles.t4;
      descriptionProyect1.textContent = json.es.proyects.description.d1.d1;
      descriptionProyect1B.textContent = json.es.proyects.description.d1.d2;
      descriptionProyect2.textContent = json.es.proyects.description.d2;
      descriptionProyect3.textContent = json.es.proyects.description.d3;
      descriptionProyect4.textContent = json.es.proyects.description.d4;
      
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
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.en.titles.t1;
      titulo2.textContent = json.en.titles.t2;
      navTittle1.textContent = json.en.navbar.inicio;
      navTittle2.textContent = json.en.navbar.perfil;
      navTittle3.textContent = json.en.navbar.portafolio;
      navTittle4.textContent = json.en.navbar.contacto;
      navTittle5.textContent = json.en.navbar.idioma.title;
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
      skills.textContent = json.en.profile.skills;
      botonInicial.textContent = "My Work";
      toggleEn.textContent = json.en.navbar.idioma.en;
      toggleEs.textContent = json.en.navbar.idioma.es;
      sectionProyecto.textContent = "Proyects"
      tituloProyecto1.textContent = json.en.proyects.titles.t1;
      tituloProyecto2.textContent = json.en.proyects.titles.t2;
      tituloProyecto3.textContent = json.en.proyects.titles.t3;
      tituloProyecto4.textContent = json.en.proyects.titles.t4;
      tituloProyecto1A.textContent = json.en.proyects.titles.t1;
      tituloProyecto2A.textContent = json.en.proyects.titles.t2;
      tituloProyecto3A.textContent = json.en.proyects.titles.t3;
      tituloProyecto4A.textContent = json.en.proyects.titles.t4;
      descriptionProyect1.textContent = json.en.proyects.description.d1.d1;
      descriptionProyect1B.textContent = json.en.proyects.description.d1.d2;
      descriptionProyect2.textContent = json.en.proyects.description.d2;
      descriptionProyect3.textContent = json.en.proyects.description.d3;
      descriptionProyect4.textContent = json.en.proyects.description.d4;
      
    });
}


