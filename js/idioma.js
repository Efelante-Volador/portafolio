document.getElementById('jsonBtnEs').addEventListener('click', es);
document.getElementById('jsonBtnEn').addEventListener('click', en);
function en() {
  console.log("english");
      // Obtiene un elemento del documento HTML Párrafo
      var titulo1 = document.getElementById('t1');
      var titulo2 = document.getElementById('t2');
      // Establece el contenido del archivo JSON como el texto del párrafo
      titulo1.textContent = "Hello I´m";
      titulo2.textContent= "I´m Developer"
}
function es() {
  console.log("Espanish");
  /*/////////////////////////
  fetch('js/info.json')
  .then(function(res){
      // Devuelve el contenido del archivo JSON parseado como un objeto JavaScript
      return res.json();
  })
  .then(function(json){
      // Obtiene un elemento del documento HTML Párrafo
      var p = document.getElementById('txt');
      var p2 = document.getElementById('txt1');
      // Establece el contenido del archivo JSON como el texto del párrafo
      p.textContent = json.es.prueba1;
      p2.textContent = json.es.prueba2;
  });
  *//////////////////////
}