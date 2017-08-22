var prueba = document.getElementById("add");
prueba.addEventListener("click", createCard);

function createCard(){
  //creamos elementos contenedores (tarjeta)
  var section = document.createElement("section");
  var div = document.createElement("div");
  var h2 = document.createElement("h2");

  //contenido de h2
  var newList = document.getElementById("newList").value;
  var title = document.createTextNode(newList);

  //agregamos contenido h2 para crear tarjeta
  h2.appendChild(title);
  div.appendChild(h2);
  section.appendChild(div);
  section.setAttribute("class", "card");
  div.setAttribute("class", "cardTitle");
  // input.setAttribute("type", "text");
  // input.setAttribute("value", " ");
  // input.setAttribute("class", "hola");



  //
  universe.appendChild(section);

  // console.log(section);


  // var newList = document.getElementById("newList").value;

}
