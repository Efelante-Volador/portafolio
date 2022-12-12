document.getElementById('jsonBtnEs').addEventListener('click', es);
document.getElementById('jsonBtnEn').addEventListener('click', en);
function es() {
  //console.log("spanish");
  fetch('json/infopag.json')
    .then(function(res) {
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
    })
    .then(function(json) {
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
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.es.titles.t1;
      titulo2.textContent = json.es.titles.t2;
      navTittle1.textContent = json.es.navbar.inicio;
      navTittle2.textContent = json.es.navbar.perfil;
      navTittle3.textContent = json.es.navbar.portafolio;
      navTittle4.textContent = json.es.navbar.contacto;
      navTittle5.textContent = json.es.navbar.idioma;
      caption1.textContent = json.es.profile.caption.c1;
      caption2.textContent = json.es.profile.caption.c2;
      caption3.textContent = json.es.profile.caption.c3;
      caption4.textContent = json.es.profile.caption.c4;
      tituloPerfil.textcontent = json.es.profile.title;
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
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.en.titles.t1;
      titulo2.textContent = json.en.titles.t2;
      navTittle1.textContent = json.en.navbar.inicio;
      navTittle2.textContent = json.en.navbar.perfil;
      navTittle3.textContent = json.en.navbar.portafolio;
      navTittle4.textContent = json.en.navbar.contacto;
      navTittle5.textContent = json.en.navbar.idioma;
      caption1.textContent = json.en.profile.caption.c1;
      caption2.textContent = json.en.profile.caption.c2;
      caption3.textContent = json.en.profile.caption.c3;
      caption4.textContent = json.en.profile.caption.c4;
      tituloPerfil.textContent = json.en.profile.title;
    });
}