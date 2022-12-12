document.getElementById('jsonBtnEs').addEventListener('click', es);
document.getElementById('jsonBtnEn').addEventListener('click', en);
function es() {
  //console.log("Espanish");
      fetch('json/infopag.json')
  .then(function(res){
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
  })
  .then(function(json){
      // Obtiene un elemento del documento HTML Párrafo
      var titulo1 = document.getElementById('t1');
      var titulo2 = document.getElementById('t2');
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.es.Titles.T1;
      titulo2.textContent = json.es.Titles.T2;
  });
}
function en() {
  //console.log("english");
  fetch('json/infopag.json')
  .then(function(res){
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
  })
  .then(function(json){
      // Obtiene un elemento del documento HTML Párrafo
      var titulo1 = document.getElementById('t1');
      var titulo2 = document.getElementById('t2');
      var navTittle1 = document.getElementById('nav-tittle-inicio');
      var navTittle2 = document.getElementById('nav-tittle-perfil');
      var navTittle3 = document.getElementById('nav-tittle-portafolio');
      var navTittle4 = document.getElementById('nav-tittle-contacto');
      var navTittle5 = document.getElementById('nav-tittle-idioma');
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = json.en.titles.t1;
      titulo2.textContent = json.en.titles.t2;
      navTittle1.textContent = json.en.navbar.inicio;
      navTittle2.textContent = json.en.navbar.perfil;
      navTittle3.textContent = json.en.navbar.portafolio;
      navTittle4.textContent = json.en.navbar.contacto;
      navTittle5.textContent = json.en.navbar.idioma;
  });
}