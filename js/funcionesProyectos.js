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
const nextProject = document.getElementById('next-project');
const previusProject = document.getElementById('previus-project');


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
  var valor = getUrlParameter("valor");
  fetch('json/project.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
      // Establece el contenido del archivo JSON como el texto del párrafo dependiendo del valor en el url
      titleDetail.textContent = json.es.general.titleDetail;
      titleTec.textContent = json.es.general.titleTec;
      titleLink.textContent = json.es.general.titleLink;
      switch (valor) {
        case "1":
          title.textContent = "Casita Latina"
          detail.textContent = json.es.project1.detail;
          detail2.textContent = json.es.project1.detail2;
          detail3.textContent = json.es.project1.detail3;
          detail4.textContent = json.es.project1.detail4;
          detail5.style.display = "none";
          detail6.style.display = "none";
          detail7.style.display = "none";
          link.innerHTML = json.es.project1.link; //pasando elemento '<A href>' desde el json a 'project.html'
          link2.style.display = "none";
          img1.innerHTML = json.es.project1.img1;
          img2.innerHTML = json.es.project1.img2;
          img3.innerHTML = json.es.project1.img3;
          nextProject.innerHTML = json.es.project1.nextProject;
          break;
        case "2":
          title.textContent = "Bot de Discord"
          detail.textContent = json.es.project2.detail;
          detail2.textContent = json.es.project2.detail2;
          detail3.textContent = json.es.project2.detail3;
          detail4.textContent = json.es.project2.detail4;
          detail5.textContent = json.es.project2.detail5;
          detail6.textContent = json.es.project2.detail6;
          detail7.textContent = json.es.project2.detail7;
          link.innerHTML = json.es.project2.link;
          link2.innerHTML = json.es.project2.link2;
          img1.innerHTML = json.es.project2.img1;
          img2.innerHTML = json.es.project2.img2;
          img3.innerHTML = json.es.project2.img3;
          nextProject.innerHTML = json.es.project2.nextProject;
          previusProject.innerHTML = json.es.project2.previusProject;

          break;
        case "3": //cambiar nombre en doc procesar.js al agregar proyecto nuevo
          title.textContent = "Proyecto 3"
          detail.textContent = json.es.project3.detail;
          link.textContent = json.es.project3.link;
          break;
        case "4":
          title.textContent = "Proyecto 4"
          detail.textContent = json.es.project4.detail;
          link.textContent = json.es.project4.link;
          break;
        default:
          console.log(valor);
          break;
      }
    });
}
function idiomaEs() { // agregar traduccion de footer
  fetch('json/project.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      titleDetail.textContent = json.es.general.titleDetail;
      titleTec.textContent = json.es.general.titleTec;
      titleLink.textContent = json.es.general.titleLink;
    });
}
function idiomaEn() { // agregar traduccion de footer
  fetch('json/project.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      titleDetail.textContent = json.en.general.titleDetail;
      titleTec.textContent = json.en.general.titleTec;
      titleLink.textContent = json.en.general.titleLink;
    });
}